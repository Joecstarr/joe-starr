class Segment {
    constructor() {
        this.source = [null, null];
        this.sink = [null, null];
    }
    isNull = () => {
        for (var i = 0; i < this.source.length; i++) {
            if (this.source[i] == null) {
                return true;
            }
        }
        for (var i = 0; i < this.sink.length; i++) {
            if (this.sink[i] == null) {
                return true;
            }
        }
        return false;
    };
}
class Drawer {
    constructor(imgSelector, tableSelector, string_color, crossing_color, eccentricity, scale) {
        this.tableObj = document.querySelectorAll(tableSelector);
        SVG().clear(imgSelector);
        this.eccentricity = eccentricity;
        this.crossing_color = crossing_color;
        this.string_color = string_color;
        this.diagram = [];
        this.scale = 100;
        this.stroke_width = scale * this.scale;
        this.__parse_table();
        this.draw = SVG().addTo(imgSelector);
        this.segments_vert = [];
        this.segments_hor = [];
        this.__get_segments();
    }
    __parse_table = () => {
        this.diagram = Array.prototype.map.call(this.tableObj, function (tr) {
            return Array.prototype.map.call(
                tr.querySelectorAll("td"),
                function (td) {
                    return td.innerHTML.trim().replace(/(<br ?\/?>)*/g, "");
                }
            );
        });
    };
    __get_segments = () => {
        this.segments_vert = this.__get_segments_vertical();
        this.segments_hor = this.__get_segments_horizontal();
    };
    __get_segments_vertical = () => {
        var segs = [];
        for (var i = 0; i < this.diagram.length; i++) {
            var seg = new Segment();
            for (var j = 0; j < this.diagram.length; j++) {
                if (this.diagram[i][j] != ".") {
                    if (this.diagram[i][j].trim() != "") {
                        if (this.diagram[i][j].trim().toLowerCase() == "x") {
                            seg.sink[0] = i * this.scale;
                            seg.sink[1] = j * this.scale;
                        }
                        if (
                            this.diagram[i][j].trim().toLowerCase() == "o" ||
                            this.diagram[i][j].trim().toLowerCase() == "0"
                        ) {
                            seg.source[0] = i * this.scale;
                            seg.source[1] = j * this.scale;
                        }
                    }
                }
            }
            if (!seg.isNull()) {
                segs.push(seg);
            }
        }
        return segs
    };
    __get_segments_horizontal = () => {
        var segs = [];
        for (var j = 0; j < this.diagram.length; j++) {
            var seg = new Segment();
            for (var i = 0; i < this.diagram.length; i++) {
                if (this.diagram[i][j] != ".") {
                    if (this.diagram[i][j].trim() != "") {
                        if (this.diagram[i][j].trim().toLowerCase() == "x") {
                            seg.source[0] = i * this.scale;
                            seg.source[1] = j * this.scale;
                        }
                        if (
                            this.diagram[i][j].trim().toLowerCase() == "o" ||
                            this.diagram[i][j].trim().toLowerCase() == "0"
                        ) {
                            seg.sink[0] = i * this.scale;
                            seg.sink[1] = j * this.scale;
                        }
                    }
                }
            }

            if (!seg.isNull()) {
                segs.push(seg)
            }
        }
        return segs
    };
    __get_crtl_pt = (pt, direction, delta) => {
        var x = pt[0];
        var y = pt[1];
        var __line = (t) => {
            return (-t) + (y + x)
        }
        var how_far = delta * this.eccentricity
        var new_x = x + direction * Math.sin(Math.PI / 4) * how_far
        return [
            new_x,
            __line(new_x)
        ];
    };
    __draw_segment = (src, snk, delta, dir) => {

        let ctr1 = this.__get_crtl_pt(src, 1 * dir, delta);
        let ctr2 = this.__get_crtl_pt(snk, -1 * dir, delta);

        var path = "M";
        path += src[1] + "," + src[0];
        path += " C";
        path +=
            ctr1[1] +
            "," +
            ctr1[0] +
            "," +
            ctr2[1] +
            "," +
            ctr2[0] +
            "," +
            snk[1] +
            "," +
            snk[0];
        return path;
    };
    __draw_segment_hor = (step) => {
        var delta = step.sink[0] - step.source[0]
        return this.__draw_segment(step.source, step.sink, delta, 1)
    };
    __draw_segment_vert = (step) => {
        var delta = step.sink[1] - step.source[1]
        return this.__draw_segment(step.source, step.sink, delta, -1)
    };

    generate = () => {
        var group_o = this.draw.group().addClass("outer-group");
        var group = group_o.group().addClass("my-group" + i);
        group.attr("fill", "none");
        group.attr("stroke-width", this.stroke_width);
        group.attr("stroke", this.string_color);

        for (var i = 0; i < this.segments_hor.length; i++) {
            var inner_group = group.group().addClass("my-group" + i);
            var path_str = this.__draw_segment_hor(this.segments_hor[i]);
            var path = inner_group.path(path_str);
            path.stroke({
                color: this.crossing_color,
                width: this.stroke_width * 2,
            });
            path.plot();
            var path = inner_group.path(path_str);
            path.plot();
        }
        for (var i = 0; i < this.segments_vert.length; i++) {
            var inner_group = group.group().addClass("my-group" + i);
            var path_str = this.__draw_segment_vert(this.segments_vert[i]);
            var path = inner_group.path(path_str);
            path.stroke({
                color: this.crossing_color,
                width: this.stroke_width * 2,
            });
            path.plot();
            var path = inner_group.path(path_str);
            path.plot();
        }

        group.transform({
            origin: { x: this.diagram.length * this.scale * .5, y: this.diagram.length * this.scale * .5 },
            rotate: '45'
        })

        this.draw.viewbox({
            x: group_o.bbox().x,
            y: group_o.bbox().y,
            width: group_o.bbox().width,
            height: group_o.bbox().height,
        });
    };
}
