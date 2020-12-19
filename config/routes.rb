Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index' 
  
  namespace :api do 
    namespace :v1 do 
      resources :courses do 
        resources :sections do 
          resources :lessons 
        end
      end
    end
  end
  
  get '*path', to: 'home#index'
end
