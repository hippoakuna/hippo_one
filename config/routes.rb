HippoOne::Application.routes.draw do
  root "global_pages#home"
  
  match '/akuna', 	   to: 'akuna#akuna', 	   via: 'get'
  match '/akunaphoto', to: 'akuna#akunaphoto', via: 'get'
  match '/akunatext',  to: 'akuna#akunatext',  via: 'get'

  match '/melikebees', 		to: 'melikebees#melikebees', 	  via: 'get'
  match '/melikebeesaudio', to: 'melikebees#melikebeesaudio', via: 'get'
  match '/melikebeesvideo', to: 'melikebees#melikebeesvideo', via: 'get'
  match '/melikebeesphoto', to: 'melikebees#melikebeesphoto', via: 'get'
  match '/melikebeesstore', to: 'melikebees#melikebeesstore', via: 'get'

  match '/fbmlb', to: 'facebook#mlb', via: 'get' 
end
