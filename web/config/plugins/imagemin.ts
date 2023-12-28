/**
 * Optimize your image assets using Sharp.js and SVGO.
 *
 * https://github.com/FatehAK/vite-plugin-image-optimizer
 */
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default function configImageminPlugin() {
  return ViteImageOptimizer();
}
