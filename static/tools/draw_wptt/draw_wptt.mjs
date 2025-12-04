import notewptt from "./note_wptt_wasm.js";


var notewasm = await notewptt(); 




class Integral {
    constructor(weight, eccentricity, crossing_color, stroke_width, group) {
        this.weight = weight;
        this.__eccentricity = eccentricity;
        this.crossing_color = crossing_color;
        this.stroke_width = stroke_width;
        this.__group = group;
        this.__gap = stroke_width * 11;
        this.__crossing_size = stroke_width * 2;
    }

    __draw_strand = (x1, y1, x2, y2) => {
        return "M " + x1 + "," + y1 + " C " + (this.__gap / 2 + x1) + "," + y1 + " " + (this.__gap / 2 + x1) + "," + y2 + " " + x2 + "," + y2;
    };

    __draw_segment_plus = (inner_group) => {
        for (let i = 0; i < Math.abs(this.weight); i++) {
            var path_str = this.__draw_strand(i * this.__gap, 0, (i + 1) * this.__gap, this.__gap);
            var path = inner_group.path(path_str);
            path.plot();
            path_str = this.__draw_strand(i * this.__gap, this.__gap, (i + 1) * this.__gap, 0);
            path = inner_group.path(path_str);
            path.stroke({
                color: this.crossing_color,
                width: this.__crossing_size,
            });
            path = inner_group.path(path_str);
            path.plot();
        };
        return inner_group;
    };

    __draw_segment_zero = (inner_group) => {
        var path_str = this.__draw_strand(0, 0, this.__gap, 0);
        var path = inner_group.path(path_str);
        path.plot();
        path_str = this.__draw_strand(0, this.__gap, this.__gap, this.__gap);
        path = inner_group.path(path_str);
        path.plot();
        return inner_group;
    };
    __draw_segment_minus = (inner_group) => {
        for (let i = 0; i < Math.abs(this.weight); i++) {
            var path_str = this.__draw_strand(i * this.__gap, this.__gap, (i + 1) * this.__gap, 0);
            var path = inner_group.path(path_str);
            path.plot();
            path_str = this.__draw_strand(i * this.__gap, 0, (i + 1) * this.__gap, this.__gap);
            path = inner_group.path(path_str);
            path.stroke({
                color: this.crossing_color,
                width: this.__crossing_size,
            });
            path = inner_group.path(path_str);
            path.plot();
        };
        return inner_group;
    };

    draw = () => {
        var inner_group = this.__group.group().addClass("integral_group");
        if (this.weight < 0) {
            return this.__draw_segment_minus(inner_group);
        } else if (this.weight > 0) {
            return this.__draw_segment_plus(inner_group);
        }
        else {
            return this.__draw_segment_zero(inner_group);
        }
    };
}

class BandDraw {
    constructor(band, eccentricity, crossing_color, stroke_width, gap, group,show_zero=false,depth=0) {
        this.eccentricity = eccentricity;
        this.crossing_color = crossing_color;
        this.stroke_width = stroke_width
        this.__group = group;
        this.__gapmult = gap;
        this.__gap = this.stroke_width * gap;
        this.__band = band;
        this.__xoffset = 0;
        this.__wc = [];
        this.__show_zero = show_zero;
        this.__depth = depth
    }

    __world_coor_bottom_right = (outerGroup, innerGroup) => {
        const transformMatrix = innerGroup.ctm().multiply(outerGroup.ctm().inverse());
        const innerBBox = innerGroup.bbox();
        const transformedX = innerBBox.x + innerBBox.width;
        const transformedY = innerBBox.y + innerBBox.height;
        const pointInContainingGroup = new SVG.Point(transformedX, transformedY).transform(transformMatrix);
        return [pointInContainingGroup.x, pointInContainingGroup.y]
    };

    __world_coor_top_left = (outerGroup, innerGroup) => {
        const transformMatrix = innerGroup.ctm().multiply(outerGroup.ctm().inverse());
        const innerBBox = innerGroup.bbox();
        const transformedX = innerBBox.x;
        const transformedY = innerBBox.y;
        const pointInContainingGroup = new SVG.Point(transformedX, transformedY).transform(transformMatrix);
        return [pointInContainingGroup.x, pointInContainingGroup.y]
    };

    __connect_vh = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 - this.eccentricity * this.__gap) + "," +  y1g1 + " " + x2g1+ "," +  (y2g1 - this.eccentricity * this.__gap)+ " " + x2g1 + "," + y2g1;
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 - this.eccentricity * this.__gap) + "," + y1g2 + " " + x2g2+ "," + (y2g2 + this.eccentricity * this.__gap)+ " " + x2g2 + "," + y2g2;
        group.path(top);
        group.path(bottom);
    };

    __connect_cl = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top    = "M " + x1g1 + "," + y1g1 + " C " + x1g1  + "," + (y1g1 + this.eccentricity * this.__gap)+ " " + (x2g1 + this.eccentricity * this.__gap)+ "," + (y2g1+ this.eccentricity * this.__gap) + " " + x2g1 + "," + (y2g1+ this.eccentricity * this.__gap);
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + x1g2  + "," + (y1g2 - this.eccentricity * this.__gap)+ " " + (x2g2 + this.eccentricity * this.__gap)+ "," + (y2g2- this.eccentricity * this.__gap) + " " + x2g2 + "," + (y2g2- this.eccentricity * this.__gap);
        group.path(top);
        group.path(bottom);
    };
    __connect_cr = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 + this.eccentricity * this.__gap) + "," + y1g1 + " " + (x2g1 - this.eccentricity * this.__gap)+ "," + (y2g1 - this.eccentricity * this.__gap) + " " + x2g1 + "," + (y2g1- this.eccentricity * this.__gap);
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 + this.eccentricity * this.__gap) + "," + y1g2 + " " + (x2g2 - this.eccentricity * this.__gap)+ "," + (y2g2 + this.eccentricity * this.__gap) + " " + x2g2 + "," + (y2g2+ this.eccentricity * this.__gap);
        group.path(top);
        group.path(bottom);
    };
    __proc_integral = (band) => {
        band.transform({
            translateX: this.__xoffset,
        })
        this.__xoffset += band.bbox().width + this.__gap*2;
        this.__wc.push(band);
    };
    __proc_child = (child, group,depth) => {
        var group_i = group.group().addClass("child_group");
        var band = new BandDraw(child, this.eccentricity, this.crossing_color, this.stroke_width, this.__gapmult, group_i,this.__show_zero,this.__depth+1).draw();
        console.log("depth: "+this.__depth)
        band.transform({
                translateX: this.__xoffset + (band.bbox().height / 2) - (band.bbox().width / 2) + this.__gap,
                rotate: (Math.pow(-1,(this.__depth % 2)))*90
            })
        console.log((Math.pow(-1,(this.__depth % 2)))*90)
        this.__xoffset += band.bbox().height + this.__gap * 2;
        this.__wc.push(group_i);
    };
    draw = () => {
        var group = this.__group.group().addClass("level_group");
        for (let i = 0; i < this.__band.children.size(); i++) {
            var band = undefined;
            if ((this.__show_zero==true)||(this.__band.weights.get(i) != 0)) {
                band = new Integral(this.__band.weights.get(i), this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
                console.log("the "+this.__band.weights.get(i)+ "weight")
                this.__proc_integral(band);
            }
            if (this.__band.children.get(i) != undefined) {
                this.__proc_child(this.__band.children.get(i), group);
            }

        }
        if (0 < this.__band.children.size()) {
            if ((this.__show_zero==true)||(this.__band.weights.get(this.__band.children.size()) != 0)) {
                console.log("Right most weight: "+this.__band.weights.get(this.__band.children.size()))
                band = new Integral(this.__band.weights.get(this.__band.children.size()), this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
                this.__proc_integral(band);
            }
        } 
        else {
            if ((this.__show_zero==true)||(this.__band.weights.get(0) != 0)) {
                console.log("leaf weight: "+this.__band.weights.get(0))
                band = new Integral(this.__band.weights.get(0), this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
                this.__proc_integral(band);
            }
        }
        for (let i = 1; i < this.__wc.length; i++) {
            var worldbr_i = this.__world_coor_bottom_right(group, this.__wc[i]);
            var worldtl_i = this.__world_coor_top_left(group, this.__wc[i]);
            var worldbr_im1 = this.__world_coor_bottom_right(group, this.__wc[i - 1]);
            var worldtl_im1 = this.__world_coor_top_left(group, this.__wc[i - 1]);
            this.__connect_vh(group,
                worldtl_i[0], worldtl_i[1],
                worldbr_im1[0], worldtl_im1[1],
                worldtl_i[0], worldbr_i[1],
                worldbr_im1[0], worldbr_im1[1],
            );
        }
        if (1 < this.__wc.length) {
            var left_child_br = this.__world_coor_bottom_right(group, this.__wc[0]);
            var left_child_tl = this.__world_coor_top_left(group, this.__wc[0]);
            var right_child_br = this.__world_coor_bottom_right(group, this.__wc[this.__wc.length - 1]);
            var right_child_tl = this.__world_coor_top_left(group, this.__wc[this.__wc.length - 1]);
            
            var worldbr = [group.bbox().x2 + this.__gap, group.bbox().y2];
            var worldtl = [group.bbox().x - this.__gap, group.bbox().y];

            this.__connect_cl(group,
                left_child_tl[0], left_child_br[1],
                worldtl[0], worldbr[1],
                left_child_tl[0], left_child_tl[1],
                worldtl[0], worldtl[1],
            );

            this.__connect_cr(group,
                right_child_br[0], right_child_tl[1],
                worldbr[0], worldtl[1],
                right_child_br[0], right_child_br[1],
                worldbr[0], worldbr[1],

            );
        }
        return group
    };

};

class Drawing {
    constructor(wptt, imgSelector, string_color, crossing_color, eccentricity, scale, gap,x=0,y=0,size=250) {
        SVG().clear(imgSelector);
        this.eccentricity = eccentricity * scale;
        this.crossing_color = crossing_color;
        this.string_color = string_color;
        this.stroke_width = scale;
        this.__drawing = SVG().addTo(imgSelector);
        this.__gap = gap;
        this.__wptt = wptt;
        this.__x = x;
        this.__y = y;
        this.__size = size;
    }
    draw = () => {
        var wptt = new notewasm.WPTT(this.__wptt);
        var show_zero = false;
        if((this.__wptt === "i[0]")||(this.__wptt==="i[0 0]"))
        {
            show_zero =true;
        }
        try {
            var group = this.__drawing.group().addClass("outer_group");

            var group_in = (new BandDraw(wptt.root, this.eccentricity, this.crossing_color, this.stroke_width, this.__gap, group,show_zero)).draw();

            if (wptt.label == notewasm.V4Label.V4_LABEL_X) {
                group_in.flip('x', { x: group.bbox().width / 2, y: group.bbox().height / 2 });
            }
            else if (wptt.label == notewasm.V4Label.V4_LABEL_Y) {
                group_in.flip('y', { x: group.bbox().width / 2, y: group.bbox().height / 2 });
            }
            else if (wptt.label == notewasm.V4Label.V4_LABEL_Z) {
                group_in.rotate(90);
            }

            group.attr("fill", "none");
            group.attr("stroke-width", this.stroke_width);
            group.attr("stroke", this.string_color);
            this.__drawing.viewbox({
                x: group.bbox().x,
                y: group.bbox().y,
                width: group.bbox().width,
                height: group.bbox().height,
            });
            this.__drawing.attr({x:this.__x,y:this.__y})
            this.__drawing.size(this.__size,this.__size)
        }
        finally
        {
            wptt.delete();
        }
    };



}

export default Drawing;