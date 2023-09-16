import Theme from 'vitepress/theme'
import './style/var.css';
import { h } from "vue";
import AnimateTitle from "./components/AnimateTitle.vue";
import { Props } from './common/data';

const IndexConfig: Props = {
  firstTitle: 'roses-ui',
  secondTitle: undefined,
  thirdTitle: undefined
}

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-hero-info": () => h(AnimateTitle, { ...IndexConfig }),
    });
  },
}
