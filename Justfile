@_default:
    just --list

# Set up development environment
bootstrap:
    git submodule update --init --recursive
    if test ! -e .venv; then \
    uv venv && uv pip install -r requirements.txt ; \
    fi
    source .venv/bin/activate

proc-svg-size: bootstrap
    find ./static/presentations -iname "*.svg" -exec sh -c 'inkscape --actions="page-fit-to-selection" "$1" -o "$1" ' sh {} \;
    python ./misc/proc_svg_size.py ./static/presentations

proc-svg-color: bootstrap
    python ./misc/proc_svg_pallete.py ./static/presentations ./misc/colors.yaml

proc-svg: proc-svg-size proc-svg-color
    echo "processing svg"

clean:
    hugo mod clean
    rm -fr build_dir

run:  clean
    hugo server --navigateToChanged -DF -d build_dir --logLevel debug

pdf type="research" presentation="comp_talk" resolution="1920x1080":
    decktape -s {{resolution}} --load-pause 10000 http://localhost:1313/speaking/{{type}}/{{presentation}} {{presentation}}_presentation_{{resolution}}.pdf

# Init tailwind css
[working-directory: 'themes/blowfish']
init-tailwind:
    npm install

# Compile tailwind css
update-tailwind: init-tailwind
	tailwindcss -c ./themes/blowfish/tailwind.config.js -i ./themes/blowfish/assets/css/main.css -o ./assets/css/compiled/main.css --jit

check-prettier:
    prettier "content/**/*.md" --check

do-prettier:
    prettier -w "content/**/*.md"
