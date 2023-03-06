<p align="center">
<img src="assets/jacked-logo.svg" style="display: block; margin-left: auto; margin-right: auto; width: 50%;">
</p>

# Jacked-Action
Jacked provides organizations with a more comprehensive look at their application to take calculated actions and create a better security approach. Its primary purpose is to scan vulnerabilities to implement subsequent risk mitigation measures. 

# Installation 📥

```yaml
# name: optional, title of the github action
name: Jacked Scan
# on: github action like pull-request, push, events
on: [push, pull_request]
# jobs: one or more
jobs:
  jacked: #jacked: is the custom name of the build:
    runs-on: ${{matrix.os}}
    strategy:
      matrix:
        os: [ubuntu-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Run carbonetes/jacked
        uses: carbonetes/jacked@v1.0.0
        with:
          repository: <your-repository-url>
          fail_on_vulnerability: true
```

## License

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)