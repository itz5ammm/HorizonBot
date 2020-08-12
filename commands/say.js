{{if gt (len .Args) 1}}

{{$arg := (index .Args 0)}}

{{$color := randInt 000000 999999}}

{{$message := (joinStr " " (slice .CmdArgs 0))}}

{{$filter := reFindAll `fuck|bitch|nigga|nigger|nibba|cunt|asshole|motherfucker|faggot|🖕|cocksucker` (lower $message)}}

{{if $filter}}

{{sendMessage nil (cembed "title" "Message failed to sent!" "description" "Your message contains offensive words." "color" 0xB22222)}}
 
{{else}}

{{if eq $arg "+sayem"}}

{{$embed := cembed "title" "" "description" $message "author" (sdict "name" .User.Username "icon_url" (.User.AvatarURL "256")) "footer" (sdict "text" "") "color" $color}}

{{sendMessage nil $embed}}

{{else if eq $arg "+say"}}

{{sendMessage nil $message}}

{{end}}{{deleteTrigger 0}}{{end}}

{{else}}

{{sendMessage nil (cembed "title" "❌Invalid Command Usage!" "description" "Correct Method to using command: -sayem <text here>!" "color" 0xB22222)}}

{{end}}
