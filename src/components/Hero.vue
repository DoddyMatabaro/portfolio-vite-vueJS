<template>
    <section>
        <article>
            <h1>{{headline}}</h1>
            <p>{{subtitle}}</p>
            <a 
                class="" 
                :href="button_url">
                    {{button_label}}
            </a>
        </article>
        <article>
            <img :src="image" />
        </article>
    </section>
</template>

<script setup>

    import {useHeo} from '../hooks/useCMS';

    const { headline,  subheadline: subtitle, diviser, button_label, button_url} = useHero();
</script>

<style>

</style>