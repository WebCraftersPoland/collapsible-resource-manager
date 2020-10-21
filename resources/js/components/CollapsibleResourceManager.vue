<template>
    <div v-if="!isEmpty || data.linkTo" :class="[ data.type, { 'mb-8': isTopLevel, 'active': isActiveTopLevel }, 'select-none', 'collapsible' ]">
        <component v-if="data.label && isTopLevel" v-bind="topLevelLink"
                @click="toggleTopLevel; changeActiveTopLevel()"
                :class="{ 'cursor-pointer': isTopCollapsible }"
                class="flex flex-1 items-center font-normal text-white mb-2 text-base no-underline relative">

            <div v-if="data.icon" class="sidebar-icon" v-html="data.icon"/>

            <svg v-else class="sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill="var(--sidebar-icon)"
                    d="M3 1h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3h-4zM3 11h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4h-4z"/>
            </svg>

            <Badge :label="data.badge" :dim="isTopCollapsible || data.linkTo">

                <span class="flex text-white sidebar-label">
                    {{ data.label }}
                </span>

                <CollapsibleIndicator 
                    :icon="state.icon" 
                    :expanded="isActiveTopLevel" 
                    :visible="isTopCollapsible"
                    :rotateIcon="state.rotateIcon && isActiveTopLevel"
                />

            </Badge>

        </component>

        <CollapseTransition :duration="150">

            <ResourceList class="resources-only"
                        v-if="isTopLevel && data.resources.length && (!isTopCollapsible || isActiveTopLevel)"
                        :resources="data.resources"
                        :recursive="recursive"
                        :remember-menu-state="rememberMenuState"/>

        </CollapseTransition>

        <template v-if="isGroup && data.resources.length">
            <h4 class="relative select-none ml-8 mt-4 text-xs text-white-50% uppercase tracking-wide cursor-pointer"
                v-if="data.label"
                @click="toggleGroup(data.id); changeActiveGroup()"
            >

                <CollapsibleIndicator 
                    :icon="state.icon" 
                    :expanded="isActiveGroup" 
                    :visible="isTopCollapsible"
                    :rotateIcon="state.rotateIcon && isActiveGroup"
                />

                <Badge :label="data.badge">
                    {{ data.label }}
                </Badge>

            </h4>

            <CollapseTransition :duration="150">

                <ResourceList v-if="isActiveGroup"
                            :resources="data.resources"
                            :recursive="recursive"
                            :remember-menu-state="rememberMenuState"/>

            </CollapseTransition>

        </template>
    </div>  
</template>

<script>

    import { CollapseTransition } from 'vue2-transitions'
    import ResourceList from './ResourceList'
    import Badge from './Badge'
    import CollapsibleIndicator from './CollapsibleIndicator'
    import { store } from './store';

    export default {
        name: 'CollapsibleResourceManager',
        components: { CollapsibleIndicator, CollapseTransition, ResourceList, Badge },
        props: {
            data: { type: Object, required: true },
            rememberMenuState: { type: Boolean, default: false },
            recursive: { type: Boolean, default: false },
            activeGroup: { type: Number, default: null },
            icon: { type: String, default: null },
            rotateIcon: { type: Boolean, default: false }
        },
        data() {
            return {
                topExpanded: this.data.expanded,
                activeMenu: { [ this.data.id ]: this.data.expanded },
                state: store.state,
            }
        },
        created() {
            if(this.icon)
                store.setIcon(this.icon);

            if(this.rotateIcon)
                store.setRotate(this.rotateIcon);

            if (this.rememberMenuState) {

                const state = localStorage.getItem(this.cacheKey)

                if (state) {

                    this.activeMenu[ this.data.id ] = JSON.parse(state)

                }

                this.$watch(() => this.activeMenu[ this.data.id ], state => {

                    localStorage.setItem(this.cacheKey, state)

                })

            }

        },
        computed: {
            isTopCollapsible() {
                return this.data.expanded === null ? false : true && this.data.linkTo === null
            },
            isGroup() {
                return this.data.type === 'group'
            },
            isTopLevel() {
                return this.data.type === 'top_level'
            },
            cacheKey() {
                return `menu-state.${ this.data.id }`
            },
            isEmpty() {
                return this.data.resources.length === 0
            },
            isActiveGroup() {
                return this.data.id == this.activeGroup;
            },
            isActiveTopLevel() {
                return this.data.id == this.state.activeTopLevel;
            },
            topLevelLink() {

                if (this.data.linkTo) {

                    return {
                        is: 'router-link',
                        to: this.data.linkTo.router,
                        target: this.data.linkTo.target,
                        class: [ 'cursor-pointer', 'dim' ]
                    }

                }

                return {
                    is: 'h3'
                }

            }
        },
        methods: {
            toggleTopLevel() {
                if (this.isTopCollapsible) {
                    this.topExpanded = !this.topExpanded
                }
            },
            toggleGroup(id) {
                this.activeMenu[ id ] = !this.isActiveGroup;
            },
            changeActiveGroup() {
                this.$emit('update:activeGroup', !this.isActiveGroup ? this.data.id : null);
                this.$set(this.data, 'expanded', this.isActiveGroup);
            },
            changeActiveTopLevel() {
                store.setActiveTopLevel(this.data.id);
                this.$set(this.data, 'expanded', this.isActiveTopLevel);
            }
        }
    }

</script>

<style scoped>

    .top_level ul li:first-child {
        padding-top: 0;
    }

    .group ul li:first-child {
        padding-top: 1rem;
    }

    .group h4 {
        margin-left: 0;
    }

    .group h4:first-child {
        margin-top: 0;
    }

</style>
