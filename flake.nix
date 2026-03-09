{
  description = "My personal website dev env";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages.nodejs
            nodePackages.npm
            nodePackages.prettier
            nodePackages.eslint
            nodePackages.typescript

            git
            prek
            just
            rumdl
            tombi
            live-server
          ];

          shellHook = ''
            just bootstrap
          '';
        };
      }
    );
}
