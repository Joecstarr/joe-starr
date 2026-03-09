import {
    ControlsContainer,
    FullScreenControl,
    SigmaContainer,
    ZoomControl,
    useRegisterEvents,
    useSigma,
    useLoadGraph,
} from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
import Graph from "graphology";
import { CSSProperties, FC, useEffect, useState } from "react";
import { useLayoutNoverlap } from "@react-sigma/layout-noverlap";
import { createNodeImageProgram } from "@sigma/node-image";

const depth_counts = {};
const processed = [];

const computeLevels = (data, node_id, depth) => {
    const node = data[node_id];
    if (!depth_counts[depth]) {
        depth_counts[depth] = 0;
    }
    if (!processed.includes(node_id)) {
        node.level = depth;
        processed.push(node_id);
        depth_counts[depth] += 1;
        if (node.parents.length > 0) {
            node.parents.forEach((item) => {
                computeLevels(data, item, depth + 1);
            });
        }
    }
};

var place = (data, graph) => {
    // Calculate positions using a simple tree layout algorithm
    const levelWidth = 300; // Horizontal space per level
    const nodeSpacing = 400; // Vertical space between nodes

    // Second pass: assign positions
    const levelPositions = {}; // Track current position for each level
    Object.entries(data).forEach(([id, node]) => {
        const level = node.level;

        // Initialize level position counter
        if (!levelPositions[level]) {
            levelPositions[level] = 0;
        }

        // Calculate centered positions
        const totalLevelHeight = (depth_counts[level] - 1) * nodeSpacing;
        const startY = -totalLevelHeight / 2;

        const x = level * levelWidth;
        const y = startY + levelPositions[level] * nodeSpacing;

        if (!graph.hasNode(id)) {
            // Add node to graph with calculated position
            graph.addNode(id, {
                x: y,
                y: x,
                size: 5,
                label: node.name,
                color: node.parents.length > 0 ? "#bd93f9" : "#ff79c6",
                // Store additional data for potential interactions
                year: node.year ? node.year + "" : "",
                school: node.school ? node.school : "",
                highlighted: false,
                type: "image",
                image: "/user-solid-full.svg",
            });
        }
        levelPositions[level]++;
    });
};

const GraphEvents: React.FC = () => {
    const registerEvents = useRegisterEvents();
    const sigma = useSigma();
    const [draggedNode, setDraggedNode] = useState<string | null>(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [clickedNodes, setClickedNodes] = useState(new Set());

    useEffect(() => {
        // Register the events
        registerEvents({
            downNode: (e) => {
                setDraggedNode(e.node);
                sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
            },
            // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
            mousemovebody: (e) => {
                if (!draggedNode) return;
                // Get new position of node
                const pos = sigma.viewportToGraph(e);
                sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
                sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

                // Prevent sigma to move camera:
                e.preventSigmaDefault();
                e.original.preventDefault();
                e.original.stopPropagation();
            },
            // On mouse up, we reset the autoscale and the dragging mode
            mouseup: () => {
                if (draggedNode) {
                    setDraggedNode(null);
                    sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
                }
            },
            // Disable the autoscale at the first down interaction
            mousedown: () => {
                if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
            }, // Hover effects for immediate feedback
            enterNode: (event) => {
                const graph = sigma.getGraph();
                const nodeId = event.node;
                setHoveredNode(nodeId);

                // Change cursor to indicate interactivity
                sigma.getContainer().style.cursor = "pointer";
                graph.setNodeAttribute(nodeId, "highlighted", true);

                // Optional: Show node details in a tooltip
                const nodeData = sigma.getGraph().getNodeAttributes(nodeId);
                graph.forEachEdge((edge) => {
                    const source = graph.source(edge);
                    const target = graph.target(edge);

                    if (source === nodeId || target === nodeId) {
                        graph.setEdgeAttribute(edge, "highlighted", true);

                        // Highlight connected nodes
                        const connectedNode = source === nodeId ? target : source;
                        graph.setNodeAttribute(connectedNode, "highlighted", true);
                    }
                });
                sigma.refresh();
            },

            leaveNode: (event) => {
                const graph = sigma.getGraph();
                // Reset cursor
                sigma.getContainer().style.cursor = "default";

                if (hoveredNode) {
                    // Clear hover highlighting
                    graph.setNodeAttribute(hoveredNode, "hovered", false);
                }
                // Clear edge highlighting
                graph.forEachEdge((edge) => {
                    graph.setEdgeAttribute(edge, "highlighted", false);
                });

                // Clear ALL node highlighting
                graph.forEachNode((node) => {
                    graph.setNodeAttribute(node, "highlighted", false);
                });

                // Force a refresh of the renderer
                sigma.refresh();

                setHoveredNode(null);
            },
        });
    }, [registerEvents, sigma, draggedNode]);

    return null;
};

export const LoadGraph = ({ graphData }) => {
    const loadGraph = useLoadGraph();
    const graph = new Graph();
    const { positions, assign } = useLayoutNoverlap();

    computeLevels(graphData[1].data, graphData[0].data, 0);
    place(graphData[1].data, graph);

    Object.keys(graphData[1].data).forEach((key) => {
        const item = graphData[1].data[key];
        item.parents.forEach((par) => {
            graph.addEdge(key, par, {
                size: 2,
                type: "arrow",
                color: "#6272a4",
                highlighted: false,
            });
        });
    });

    useEffect(() => {
        loadGraph(graph);

        assign();
    }, [assign, loadGraph]);

    return null;
};
export default function DisplayGraph({ graphData }) {
    const [imageCache, setImageCache] = useState({});
    const sigmaStyle = {
        height: "90vh",
        width: "100%",
        backgroundColor: "#282a36",
        borderColor: "color-mix(in oklab, var(--color-foreground) 10%, transparent)",
        borderRadius: "var(--radius-xl)",
        borderStyle: "var(--tw-border-style)",
        borderWidth: "8px",
    };
    const contStyle = {
        backgroundColor: "#282a36",
        border: "none",
        color: "#282a36",
    };
    // Preload images for avatar nodes
    // Custom node rendering settings
    const customSettings = {
        allowInvalidContainer: true,
        minCameraRatio: 0.1,
        maxCameraRatio: 10,
        renderLabels: true,
        labelThreshold: 100000,
        labelSize: 12,
        hideEdgesOnMove: true, // Performance optimization during pan/zoom
        hideLabelsOnMove: true,
        labelColor: { color: "#f8f8f2" },
        labelFont: "Arial, sans-serif",
        nodeProgramClasses: {
            image: createNodeImageProgram(),
        },
        // // Custom node renderer that handles different node types
        defaultDrawNodeLabel: (context, node, settings) => {
            const { x, y, size, label, type } = node;

            // Position label below the node
            const labelY = y + size + 20;

            context.font = settings.labelSize + "px " + settings.labelFont;
            context.fillStyle = settings.labelColor.color;
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(label, x, labelY);

            // Add type-specific status indicators
            context.font = "10px " + settings.labelFont;
            context.fillText(node.year + " " + node.school, x, labelY + 15);
        },
        nodeReducer: (_, attrs) => ({
            ...attrs,
            borderSize: attrs.highlighted ? 2 : 0,
            color: attrs.highlighted ? "#ffb86c" : attrs.color,
        }),
        edgeReducer: (_, attrs) => ({
            ...attrs,
            color: attrs.highlighted ? "#ffb86c" : attrs.color,
            size: attrs.highlighted ? 3 : attrs.size,
        }),
        defaultDrawNodeHover: (
            context: CanvasRenderingContext2D,
            data: PlainObject,
            settings: PlainObject,
        ) => {},
    };
    return (
        <SigmaContainer style={sigmaStyle} settings={customSettings}>
            <LoadGraph graphData={graphData} />
            <GraphEvents />
            <ControlsContainer style={contStyle} position={"bottom-right"}>
                <ZoomControl />
                <FullScreenControl />
            </ControlsContainer>
        </SigmaContainer>
    );
}
