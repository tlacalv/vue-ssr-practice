<template>
    <div>The visited URL is {{ url }}</div>
</template>
<script>
export default {
    data: {
        url: context.url,
    },
}
</script>