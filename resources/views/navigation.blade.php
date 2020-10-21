@foreach($navigation as $resource)

    <collapsible-resource-manager :data='@json($resource)'
                                  :icon='@json($icon)'
                                  :rotate-icon='@json($rotateIcon)'
                                  :remember-menu-state="@json($rememberMenuState)"
                                  >
    </collapsible-resource-manager>

@endforeach
