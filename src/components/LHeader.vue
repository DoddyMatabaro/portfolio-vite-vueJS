<template>
        <header class="font-DM container flex justify-between items-center bg-black w-screen">
            <div class="container flex flex-col basis-1/2">
                <div class="self-start">
                        <a :href="logo.url" :aria-label="logo.label">
                                <img :src="logo.url" width="160" aria-hidden />
                        </a>
                </div>
                <nav class="self-end">
                    <ul class="container flex font-bold ">
                        <li class="p-2" v-for="menuItem in menuItems" :key="menuItem.metadata.id">
                                <a 
                                        class="hover:bg-violet-700"
                                        :href="menuItem.url" 
                                >
                                        {{menuItem.label}}
                                </a>        
                        </li>
                         <li class="p-2" v-for="action in actionItems" :key="action.metadata.id">
                                <a 
                                        :href="action.url" 
                                >
                                        {{action.label}}
                                </a>        
                        </li>

                    </ul>
                </nav>
            </div>
            <div class="flex p-2 gap-3 font-black">
                <article>ok</article>
                <article>ok</article>
                <article>ok</article>
            </div>
        </header>
</template>
        
<script setup>
        import {useLogo, useMenuItems, useActionItems } from "../hooks/useCMS.js";

        const logo = useLogo();
        const menuItems = useMenuItems();
        const actionItems = useActionItems();
</script>

<style>

</style>