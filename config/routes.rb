HippoOne::Application.routes.draw do
  route "global_pages/home"
  match '/legal', to: 'static_pages#legal', via: 'get'
end
