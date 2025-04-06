{
  description = "Flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { self
    , nixpkgs
    ,
    }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {

      devShells.${system}.default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          autoPatchelfHook
        ];

        buildInputs = with pkgs; [
          jq
          nodejs
          hugo
           uv
          just
          ruff
          git
          libxml2
          libxslt
          act
          inkscape
          chromium
          svg2pdf
          curl
          zip
          decktape
          tailwindcss
        ];
        shellHook = ''
          wget -q --spider https://google.com

          if [ $? -eq 0 ]; then
              echo "Online"
              rm -r .venv
          else
              echo "Offline"
          fi

          just bootstrap
        '';
      };
    };
}
