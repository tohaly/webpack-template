const WebpackBar = require('webpackbar');
const ProgressBar = require('ascii-progress');
const { SymfonyStyle } = require('symfony-style-console');
const io = new SymfonyStyle();

module.exports = (mode, localHost, address) => {
  let bar;
  let barStatus = 0;
  let initiated = false;

  return new WebpackBar({
    name: 'CopiTrade build',
    color: '#d769ea',
    profile: true,
    fancy: false,
    reporter: {
      start() {
        console.clear();
        console.log('  ');
        bar = new ProgressBar({
          schema: '   :bar.magenta :current.magenta.bold %.magenta.bold :elapseds.grey :token1.grey',
          total: 100,
          width: 40,
        });

        initiated && io.writeln([``, `  <fg=yellow;options=bold>Changing build...</>`]);
      },
      done({ state }) {
        mode &&
          !initiated &&
          io.writeln([
            ` 
              `,
            `      <fg=magenta>The app is available now here:</>`,
            ` `,
            `      <fg=magenta>The build is available at: ${localHost}</>`,
            `      <fg=magenta>Address on your network: ${address}</>`,
            ` 
              `,
          ]);

        !mode && !state.hasErrors && io.writeln([``, `      <fg=magenta>See in the "./build" directory</>`, ``]);

        !initiated && io.writeln([``, `  <fg=green;options=bold>All good! ${state.message}</>`, ``]);

        initiated && io.writeln([``, `  <fg=green;options=bold>Reboiled! ${state.message}</>`]);

        initiated = true;
      },
      progress({ state }) {
        if (state.progress - barStatus > 0) {
          bar.tick(state.progress - barStatus, {
            token1: state.message || 'Done',
            token2: state.request.file || '',
          });
          barStatus = state.progress;
        }
      },
      beforeAllDone({ state }) {
        state.hasErrors && io.writeln([``, `      <fg=red;options=bold>OOPS! :( Check this:</>`, ``]);
      },
    },
  });
};
