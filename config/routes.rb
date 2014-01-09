HippoOne::Application.routes.draw do
  root "global_pages#alt"

  match '/hitrecord/hat-inky-remix', to: 'global_pages#hit1',  via: 'get'
  match '/netflix/indie-picks',      to: 'global_pages#net1',  via: 'get'
  match '/kickstarter/barstow',      to: 'global_pages#kick1', via: 'get'
  match '/pandora/givers',           to: 'global_pages#pan1',  via: 'get'

  match '/melikebees', 		   to: 'melikebees#melikebees', 	   via: 'get'
  match '/melikebees/audio', to: 'melikebees#melikebeesaudio', via: 'get'
  match '/melikebees/video', to: 'melikebees#melikebeesvideo', via: 'get'
  match '/melikebees/photo', to: 'melikebees#melikebeesphoto', via: 'get'
  match '/melikebees/store', to: 'melikebees#melikebeesstore', via: 'get'

  match '/dot', 	    to: 'dot#dot', 	    via: 'get'
  match '/dot/video', to: 'dot#dotvideo', via: 'get'
  match '/dot/photo', to: 'dot#dotphoto', via: 'get'

end
