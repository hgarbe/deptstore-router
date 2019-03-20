Rails.application.routes.draw do
  namespace :api do
    resources :departments
      # resources :items
  end
end
