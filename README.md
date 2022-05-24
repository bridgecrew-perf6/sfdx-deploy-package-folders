sfdx-deploy-package-folders
===========================

Use the sfdx-project.json package folders to force:source:deploy (each one in sequence)

[![Version](https://img.shields.io/npm/v/sfdx-deploy-package-folders.svg)](https://npmjs.org/package/sfdx-deploy-package-folders)
[![CircleCI](https://circleci.com/gh/phil-apexology/sfdx-deploy-package-folders/tree/master.svg?style=shield)](https://circleci.com/gh/phil-apexology/sfdx-deploy-package-folders/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/phil-apexology/sfdx-deploy-package-folders?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-deploy-package-folders/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/phil-apexology/sfdx-deploy-package-folders.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/phil-apexology/sfdx-deploy-package-folders/badge.svg)](https://snyk.io/test/github/phil-apexology/sfdx-deploy-package-folders)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-deploy-package-folders.svg)](https://npmjs.org/package/sfdx-deploy-package-folders)
[![License](https://img.shields.io/npm/l/sfdx-deploy-package-folders.svg)](https://github.com/phil-apexology/sfdx-deploy-package-folders/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-deploy-package-folders
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
sfdx-deploy-package-folders/0.0.6 win32-x64 node-v16.7.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx package:directory:deploy [-p <string>] [-o <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-packagedirectorydeploy--p-string--o-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx package:directory:deploy [-p <string>] [-o <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Deploy (sfdx force:source:deploy) package folders as described in the sfdx-project.json file, sequentially as defined in the project file

```
USAGE
  $ sfdx package:directory:deploy [-p <string>] [-o <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -o, --options=options                                                             any additional parameters to pass
                                                                                    through to the deploy command

  -p, --project=project                                                             [default: sfdx-project.json] the
                                                                                    sfdx project json to use - will
                                                                                    retrieve package directories

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  sfdx package:directory:deploy --project sfdx-project.json --options "--wait 60 --checkonly"
```

_See code: [src/commands/package/directory/deploy.ts](https://github.com/phil-apexology/sfdx-deploy-package-folders/blob/v0.0.6/src/commands/package/directory/deploy.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
