/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as os from 'os';
import * as child from 'child_process';
import * as util from 'util';
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages, SfdxProject, NamedPackageDir } from "@salesforce/core";
import { AnyJson } from '@salesforce/ts-types';

const exec = util.promisify(child.exec);

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('sfdx-deploy-package-folders', 'deploy');

export default class Org extends SfdxCommand {
  public static description = messages.getMessage('commandDescription');

  public static examples = messages.getMessage('examples').split(os.EOL);

  public static args = [{ name: 'file' }];

  protected static flagsConfig = {
    // flag with a value (-p, --project=VALUE)
    project: flags.string({
      char: 'p',
      description: messages.getMessage('projectFlagDescription'),
      default: 'sfdx-project.json',
    }),
    options: flags.string({
      char: 'o',
      description: messages.getMessage('optionsFlagDescription'),
      default: '',
    }),
  };

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = true;

  public async run(): Promise<AnyJson> {
    const project: SfdxProject = await SfdxProject.resolve();
    // eslint-disable-next-line no-console
    console.log(project);
    const packageDirectories: NamedPackageDir[] = project.getPackageDirectories();

    for (const packageConfig of packageDirectories) {
      // eslint-disable-next-line no-console
      console.log('sfdx force:source:deploy ' + this.flags.options + ' --sourcepath ' + packageConfig.path);
      await exec('sfdx force:source:deploy ' + this.flags.options + ' --sourcepath ' + packageConfig.path);
    }
    return;
  }
}
