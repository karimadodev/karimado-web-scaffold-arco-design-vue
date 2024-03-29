<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img class="logo" :src="LogoImage" />
        <a-typography-title :heading="5" style="margin: 0; font-size: 18px">
          {{ $t('site.name') }}
        </a-typography-title>
        <icon-menu-fold
          v-if="appStore.isMobile"
          style="font-size: 22px; cursor: pointer"
          @click="toggleDrawerMenu"
        />
      </a-space>
    </div>
    <div class="center-side">
      <Menu v-if="appStore.topMenu" />
    </div>
    <ul class="right-side">
      <li v-if="locales.length > 1">
        <a-tooltip :content="$t('navbar.language')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setDropDownVisible"
          >
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
        <a-dropdown trigger="click" @select="handleChangeLocale as any">
          <div ref="triggerBtn" class="trigger-btn"></div>
          <template #content>
            <a-doption
              v-for="item in locales"
              :key="item.value"
              :value="item.value"
            >
              <template #icon>
                <icon-check :opacity="item.value === currentLocale ? 1 : 0" />
              </template>
              <template #default>
                {{ item.label }}
              </template>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
      <li>
        <a-tooltip
          :content="
            theme === 'light'
              ? $t('navbar.theme.toDark')
              : $t('navbar.theme.toLight')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="handleToggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip
          :content="
            isFullscreen
              ? $t('navbar.screen.toExit')
              : $t('navbar.screen.toFull')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleFullScreen"
          >
            <template #icon>
              <icon-fullscreen-exit v-if="isFullscreen" />
              <icon-fullscreen v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="hover" position="br">
          <a-button class="user-nav-btn">
            {{ userStore.info.name }}
            <icon-down />
          </a-button>
          <template #content>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span>
                  {{ $t('navbar.user.logout') }}
                </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, inject } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDark, useToggle, useFullscreen } from '@vueuse/core';
  import { useLocale, useUser } from '@/hooks';
  import { LOCALE_OPTIONS } from '@/locale';
  import { useAppStore, useUserStore } from '@/store';
  import { setWindowTitle } from '@/utils/window';
  import LogoImage from '@/assets/images/logo.png';
  import Menu from '../menu/index.vue';

  const appStore = useAppStore();
  const userStore = useUserStore();
  const route = useRoute();

  // menu in drawer
  const toggleDrawerMenu = inject('toggleDrawerMenu') as () => void;

  // locale
  const { currentLocale, changeLocale } = useLocale();
  const locales = [...LOCALE_OPTIONS];
  const handleChangeLocale = (value: string) => {
    changeLocale(value);
    setWindowTitle(route);
  };
  const triggerBtn = ref();
  const setDropDownVisible = () => {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    triggerBtn.value.dispatchEvent(event);
  };

  // theme
  const theme = computed(() => appStore.theme);
  const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'karimado.app.theme',
    onChanged(dark: boolean) {
      appStore.changeTheme(dark);
    },
  });
  const toggleTheme = useToggle(isDark);
  const handleToggleTheme = () => toggleTheme();

  // fullscreen
  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();

  // login/logout
  const { logout } = useUser();
  const handleLogout = () => {
    logout();
  };
</script>

<style scoped lang="less">
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
  }

  .left-side {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .logo {
      width: 32px;
      height: 32px;
    }
  }

  .center-side {
    flex: 1;
  }

  .right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;
    :deep(.locale-select) {
      border-radius: 20px;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    a {
      color: var(--color-text-1);
      text-decoration: none;
    }

    .trigger-btn {
      position: absolute;
      bottom: 14px;
      margin-left: 14px;
    }

    .nav-btn {
      border-color: rgb(var(--gray-2));
      color: rgb(var(--gray-8));
      font-size: 16px;
    }

    .user-nav-btn {
      .arco-icon {
        margin-left: 8px;
      }
    }
  }
</style>
