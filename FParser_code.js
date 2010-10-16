with( FParser ) new function(){

	var wrapSign= FWrapper( 'std:lang-code-sign' )

	lang.code= FCached
	(	FPipe
		(	function( str ){
				var found= /^(\r#!(\w{2,})\b[^\n]*\n)?([\s\S]*)$/.exec( str )
				if( !found ) return str
				var sign= wrapSign( found[1] )
				var langName= found[2]
				var content= found[3]
				var parse= lang[ langName ]
				if( parse ) content= parse( content )
				return [ sign, content ]
			}
		,	FWrapper( 'std:lang-code' )
		)
	)

}
