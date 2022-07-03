<template>
  <svg
      v-if="icon"
      class="unicon"
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      :viewBox.camel="viewBox"
      :fill="color"
      v-bind="$attrs"
      @click="onClick"
      v-html="icon.path"
  />
</template>

<script setup lang="ts">
import {PropType, ref, watch} from "vue";
import {Style, Unicon} from "../../types/Unicon";

const emit = defineEmits(['click']);
const props = defineProps({
  color: {type: String as PropType<string>, default: 'inherit'},
  size: {type: Number as PropType<number>, default: 24},
  viewBox: {type: String as PropType<string>, default: '0 0 24 24'},
  iconStyle: {
    type: String as PropType<Style>,
    default: Style.LINE,
    validator: (value: Style) => (Object.values(Style).includes(value))
  },
  name: {type: String as PropType<string>, required: true},
});

const icon = ref<Unicon>()

async function getIcon() {
  const {default: icons} = await import("../Icons");
  icon.value = icons.find((icon) => icon.name === props.name && icon.style === props.iconStyle)
}

watch([() => props.name, () => props.iconStyle], getIcon)
getIcon()

function onClick(e: Event) {
  emit('click', e);
}
</script>

<style>
.unicon {
  transition: 0.2s all;
}

.uim-primary {
  opacity: 1;
}

.uim-secondary {
  opacity: 0.7;
}

.uim-tertiary {
  opacity: 0.5;
}

.uim-quaternary {
  opacity: 0.25;
}

.uim-quinary {
  opacity: 0;
}
</style>
