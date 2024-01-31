<template>
  <div class="footer">
    <div style="flex: 1">
      {{ $t('footer.copyright') }} &copy; {{ new Date().getFullYear() }} &nbsp;
      {{ $t('site.author') }}. &nbsp; {{ $t('footer.allRightsReserved') }}.
    </div>
    <div>
      <a
        class="arco-link"
        target="_blank"
        href="https://github.com/karimadodev/karimado"
      >
        Powered by Karimado
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .footer {
    display: flex;
    margin: 20px 0 0 0;
    padding: 12px 24px 12px 24px;
    background-color: var(--color-bg-2);
    color: var(--color-text-2);
    font-weight: bold;
    font-size: 12px;

    :deep(.arco-link) {
      padding: 0;
      color: var(--color-text-2);
      font-size: 12px;
      &:hover {
        background-color: var(--color-bg-2);
      }
    }
  }
</style>
