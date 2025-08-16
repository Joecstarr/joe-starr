const Order = {
    FORWARD: 0,
    BACKWARD: 1
};

const Label = {
    I_ROTATION: 0,
    X_ROTATION: 1,
    Y_ROTATION: 2,
    Z_ROTATION: 3,
};

class Band {
    constructor() {
        this.children = [];
        this.weights = [];
        this.direction = Order.FORWARD;
        this.__i = 0
    }
    __read_rat = (input) => {
        var stick = new Band();
        var ints = [];
        while (input[this.__i] != "]") {
            if (input[this.__i] == " ") {
                this.__i++;
            } else {
                ints.push(this.__read_int(input));
            }
        }
        ints.reverse();
        if (ints.length == 1) {
            stick.weights[0] = (ints[0])
        } else {
            var prev = stick;
            stick.weights.push(0)
            stick.weights.push(ints[0])
            for (let i = 1; i < ints.length - 1; i++) {
                var child = new Band();
                child.weights.push(0);
                if (i % 2 == 1) {
                    child.weights.push(-1 * ints[i]);
                } else {
                    child.weights.push(ints[i]);
                }
                prev.children.push(child);
                prev = child;
            };
            if (1 < ints.length) {
                var child = new Band();
                if (ints.length % 2 == 0) {
                    child.weights.push(-1 * ints[ints.length - 1]);
                } else {
                    child.weights.push(ints[ints.length - 1]);
                }
                prev.children.push(child);
                prev = child;
            }
        }

        return stick;
    };
    __read_int = (input) => {
        var end = this.__i;
        while ((input[end] >= '0' && input[end] <= '9') || (input[end] == "-")) {
            end++;
        }
        var retval = parseInt(input.substring(this.__i, end));
        this.__i = end;
        return retval;
    };
    read = (input, i) => {
        this.__i = i;
        while ((input[this.__i] != ")") && (this.__i < input.length)) {
            if ((input[this.__i] >= '0' && input[this.__i] <= '9') || (input[this.__i] == "-")) {
                var w = this.__read_int(input);
                this.weights.push(w);
            };
            if (input[this.__i] == "(") {
                var band = new Band();
                this.weights.push(0);
                this.__i++;
                this.__i = band.read(input, this.__i);
                this.children.push(band)
            }
            if (input[this.__i] == "[") {
                this.__i++;
                this.weights.push(0);
                var stick = this.__read_rat(input);
                this.__i++;
                this.children.push(stick)
            }
        }
        return this.__i;
    };
}


class WPTT {
    constructor() {
        this.root = new Band();
        this.label = Label.I_ROTATION;
    }
    read = (input) => {
        if (input[0] == "i") {
            this.label = Label.I_ROTATION;
        } else if (input[0] == "x") {
            this.label = Label.X_ROTATION;

        } else if (input[0] == "y") {
            this.label = Label.Y_ROTATION;

        } else if (input[0] == "z") {

            this.label = Label.Z_ROTATION;
        }
        this.root = new Band();
        if (input[1] == "(") {
            this.root.read(input, 2);
        } else {
            this.root.read(input, 1);
            this.root = this.root.children[0];
        }
    };
}



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
    constructor(band, eccentricity, crossing_color, stroke_width, gap, group) {
        this.eccentricity = eccentricity;
        this.crossing_color = crossing_color;
        this.stroke_width = stroke_width
        this.__group = group;
        this.__gapmult = gap;
        this.__gap = this.stroke_width * gap;
        this.__band = band;
        this.__xoffset = 0;
        this.__wc = [];
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
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 - this.eccentricity * this.__gap) + "," + y1g1 + " " + x2g1 + "," + (y2g1 - this.eccentricity * this.__gap) + " " + x2g1 + "," + y2g1;
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 - this.eccentricity * this.__gap) + "," + y1g2 + " " + x2g2 + "," + (y2g2 + this.eccentricity * this.__gap) + " " + x2g2 + "," + y2g2;
        group.path(top);
        group.path(bottom);
    };
    __connect_hv = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 + this.eccentricity * this.__gap) + "," + y1g1 + " " + x2g1 + "," + (y2g1 + this.eccentricity * this.__gap) + " " + x2g1 + "," + y2g1;
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 + this.eccentricity * this.__gap) + "," + y1g2 + " " + x2g2 + "," + (y2g2 - this.eccentricity * this.__gap) + " " + x2g2 + "," + y2g2;
        group.path(top);
        group.path(bottom);
    };

    __connect_cl = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 - this.eccentricity * this.__gap) + "," + y1g1 + " " + (x2g1 + this.eccentricity * this.__gap) + "," + y2g1 + " " + x2g1 + "," + y2g1;
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 - this.eccentricity * this.__gap) + "," + y1g2 + " " + (x2g2 + this.eccentricity * this.__gap) + "," + y2g2 + " " + x2g2 + "," + y2g2;
        group.path(top);
        group.path(bottom);
    };
    __connect_cr = (group, x1g1, y1g1, x2g1, y2g1, x1g2, y1g2, x2g2, y2g2,) => {
        var top = "M " + x1g1 + "," + y1g1 + " C " + (x1g1 + this.eccentricity * this.__gap) + "," + y1g1 + " " + (x2g1 - this.eccentricity * this.__gap) + "," + y2g1 + " " + x2g1 + "," + y2g1;
        var bottom = "M " + x1g2 + "," + y1g2 + " C " + (x1g2 + this.eccentricity * this.__gap) + "," + y1g2 + " " + (x2g2 - this.eccentricity * this.__gap) + "," + y2g2 + " " + x2g2 + "," + y2g2;
        group.path(top);
        group.path(bottom);
    };
    __proc_integral = (band) => {
        this.__wc.push(band);
        band.transform({
            translateX: this.__xoffset,
        })
        this.__xoffset += band.bbox().width + this.__gap;
    };
    __proc_child = (child, group) => {
        var group_i = group.group().addClass("child_group");
        var band = new BandDraw(child, this.eccentricity, this.crossing_color, this.stroke_width, this.__gapmult, group_i).draw();
        this.__wc.push(group_i);
        band.transform({
            translateX: this.__xoffset + (band.bbox().height / 2) - (band.bbox().width / 2) + this.__gap,
            rotate: 90
        })
        this.__xoffset += band.bbox().height + this.__gap * 2;
    };
    draw = () => {
        var group = this.__group.group().addClass("level_group");
        for (let i = 0; i < this.__band.children.length; i++) {
            var band = undefined;
            if (this.__band.weights[i] != 0) {
                band = new Integral(this.__band.weights[i], this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
                this.__proc_integral(band);
            }
            if (this.__band.children[i] != undefined) {
                this.__proc_child(this.__band.children[i], group);
            }

        }
        if (0 < this.__band.children.length) {
            if (this.__band.weights[this.__band.children.length] != 0) {
                band = new Integral(this.__band.weights[this.__band.children.length], this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
                this.__proc_integral(band);
            }
        } else {
            if (this.__band.weights[0] != 0) {
                band = new Integral(this.__band.weights[0], this.eccentricity, this.crossing_color, this.stroke_width, group).draw();
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
            var worldbr_i = this.__world_coor_bottom_right(group, this.__wc[0]);
            var worldtl_i = this.__world_coor_top_left(group, this.__wc[0]);
            var worldbr_im1 = [group.bbox().x - this.__gap, group.bbox().y2];
            var worldtl_im1 = [group.bbox().x - this.__gap, group.bbox().y];
            this.__connect_cl(group,
                worldtl_i[0], worldbr_i[1],
                worldtl_im1[0], worldbr_im1[1],
                worldtl_i[0], worldtl_i[1],
                worldtl_im1[0], worldtl_im1[1],
            );
            var worldbr_i = this.__world_coor_bottom_right(group, this.__wc[this.__wc.length - 1]);
            var worldtl_i = this.__world_coor_top_left(group, this.__wc[this.__wc.length - 1]);
            var worldbr_im1 = [group.bbox().x2 + this.__gap, group.bbox().y2];
            var worldtl_im1 = [group.bbox().x2 + this.__gap, group.bbox().y];
            this.__connect_cr(group,
                worldbr_i[0], worldtl_i[1],
                worldtl_im1[0], worldtl_im1[1],
                worldbr_i[0], worldbr_i[1],
                worldtl_im1[0], worldbr_im1[1],
            );
        }
        return group
    };

};

class Drawing {
    constructor(wptt, imgSelector, string_color, crossing_color, eccentricity, scale, gap) {
        SVG().clear(imgSelector);
        this.eccentricity = eccentricity * scale;
        this.crossing_color = crossing_color;
        this.string_color = string_color;
        this.stroke_width = scale;
        this.__drawing = SVG().addTo(imgSelector);
        this.__gap = gap;
        this.__wptt = wptt;
    }
    draw = () => {
        var wptt = new WPTT();
        wptt.read(this.__wptt);
        console.log(wptt);

        var group = this.__drawing.group().addClass("outer_group");

        var group_in = (new BandDraw(wptt.root, this.eccentricity, this.crossing_color, this.stroke_width, this.__gap, group)).draw();

        if (wptt.label == Label.X_ROTATION) {
            group_in.flip('x', { x: group.bbox().width / 2, y: group.bbox().height / 2 });
        }
        else if (wptt.label == Label.Y_ROTATION) {
            group_in.flip('y', { x: group.bbox().width / 2, y: group.bbox().height / 2 });
        }
        else if (wptt.label == Label.Z_ROTATION) {
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
    };



}