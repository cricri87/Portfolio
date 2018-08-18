Rails.application.routes.draw do
  root to: 'portfolios#index'
  resources :portfolios, except: :index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
