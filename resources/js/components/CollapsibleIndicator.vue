<template>

    <div 
        class="absolute flex flex-auto collapsible-indicator" 
        :class="{ 'custom': icon, 'rotated': rotateIcon }" 
        v-if="visible"
    >
        <template v-if="icon">
            <div v-html="icon" class="icon"></div>
        </template>
        <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path v-if="expanded"
                    fill="currentColor"
                    d="M16 12c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1z"/>

                <path v-else
                    fill="currentColor"
                    d="M13 11h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2V9c0-.55.45-1 1-1s1 .45 1 1v2z"/>
            </svg>
        </template>

    </div>

</template>

<script>

    export default {
        name: 'CollapsibleIndicator',
        props: {
            expanded: {
                default: true
            },
            visible: {
                default: false
            },
            icon: {
                default: null
            },
            rotateIcon: {
                default: false
            }
        }
    }

</script>

<style lang="scss">

    .collapsible-indicator {
        top: -2px;
        right: 0;
        transition: 0.3s linear;

        &.custom {
            top: 0px;
            right: 15px;
            bottom: 0;
            margin: auto;
            height: fit-content;

            .icon {
                display: flex;
                align-items: center;
            }
        }

        &.rotated {
            transform: rotate(180deg);
            transition: 0.3s linear;
        }
    }

    h4 .collapsible-indicator {
        top: -5px;
    }

</style>
