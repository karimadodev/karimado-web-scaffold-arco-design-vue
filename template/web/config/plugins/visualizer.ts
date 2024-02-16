/**
 * Generation packaging analysis.
 *
 * https://github.com/btd/rollup-plugin-visualizer
 */
import visualizerPlugin from 'rollup-plugin-visualizer';

export default function configVisualizerPlugin() {
  if (process.env.REPORT === 'true') {
    return visualizerPlugin({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    });
  }
  return [];
}
