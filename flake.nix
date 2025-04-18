{
  description = "Flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    nixpkgs-hugo.url = "nixpkgs/63158b9cbb6ec93d26255871c447b0f01da81619";
  };

  outputs =
    {
      self,
      nixpkgs,
      nixpkgs-hugo,
    }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      pkgs-hugo = nixpkgs-hugo.legacyPackages.${system};
    in
    {

      devShells.${system}.default = pkgs.mkShell {
        nativeBuildInputs = with pkgs; [
          autoPatchelfHook
        ];

        buildInputs = [
          pkgs.jq
          pkgs-hugo.hugo
          pkgs.uv
          pkgs.just
          pkgs.ruff
          pkgs.git
          pkgs.libxml2
          pkgs.libxslt
          pkgs.act
          pkgs.inkscape
          pkgs.chromium
          pkgs.svg2pdf
          pkgs.curl
          pkgs.zip
          pkgs.decktape
          pkgs.tailwindcss
          pkgs.nodejs
          pkgs.nodePackages.prettier
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
