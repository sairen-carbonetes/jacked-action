<p align="center">
<img src="assets/jacked-logo.svg" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
</p>

# Jacked-Action
Jacked provides organizations with a more comprehensive look at their application to take calculated actions and create a better security approach. Its primary purpose is to scan vulnerabilities to implement subsequent risk mitigation measures. 

# Installation 📥

```yaml
name: Jacked Action
on: [push, pull_request]
jobs:
  jacked:
    runs-on: ${{matrix.os}}
    strategy:
      matrix:
        os: [ubuntu-latest] # can add more os: windows-latest, macOS-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2 # repository that will be used for scanning
      - name: Run carbonetes/jacked # runs the github action of jacked
        uses: carbonetes/jacked@v1.0.0 # runs the github action using this version
        with: # user’s input reference for scanning options, results that jacked-action supported.
          fail_on_vulnerability: true # sample output reference: job fails when vulnerability found.

```

## License

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)
