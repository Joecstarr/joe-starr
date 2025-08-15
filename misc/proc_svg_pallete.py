import lxml.etree as ET
import re
from pathlib import Path
from rich import print
from tqdm import tqdm
import yaml
import typer

def set_style(file_content: str):
    file_content = re.sub(r'(class=".*?")', r"", file_content)
    file_content = re.sub(r"(style=.*)", r'class="" \1', file_content)
    return file_content


def swap(file_content: str,color_swaps):
    styles = file_content.split(";")
    class_list = []
    for i, style in enumerate(styles):
        for swap_color in color_swaps:
            for color in swap_color["start"]:
                if re.match(rf".*{color}.*", style,flags=re.IGNORECASE):
                    if style.startswith("stroke"):
                        styles[i] = f'stroke:{swap_color["end"]}'
                        class_list.append(f'stroke-{swap_color["name"]}')
                    if (
                        re.match(rf'.*{swap_color["end"]}.*', style)
                        and f'stroke-{swap_color["name"]}' not in class_list
                    ):
                        class_list.append(f'stroke-{swap_color["name"]}')
                    if style.startswith("fill"):
                        styles[i] = f'fill:{swap_color["end"]}'
                        class_list.append(f'fill-{swap_color["name"]}')
                    if (
                        re.match(rf'.*{swap_color["end"]}.*', style)
                        and f'fill-{swap_color["name"]}' not in class_list
                    ):
                        class_list.append(f'fill-{swap_color["name"]}')
                    break
    return ";".join(styles), " ".join(class_list)
    ...

def main(search_dir: str,cfg: str):
    img_pth = Path(search_dir)
    with open(Path(cfg), 'r') as file:
        cfg_data = yaml.safe_load(file)



    for image in tqdm(
        list(set(img_pth.glob("**/*.svg")) - set(img_pth.glob("**/dont_proc/*.svg")))
    ):

        file_text = ""
        try:
            dom = ET.parse(image)
        except Exception as e:
            print(f"Failed to parse {image}")
            print(e)
        for tag in dom.xpath("//*[@style]"):
            new_sty, classes = swap(tag.attrib["style"],cfg_data["color_swaps"])
            tag.attrib["style"] = new_sty
            tag.attrib["class"] = classes
            ...
        with open(str(image), "w") as ptfile:
            ptfile.write(ET.tostring(dom, pretty_print=True).decode("utf8"))
        ...




if __name__ == "__main__":
    typer.run(main)
