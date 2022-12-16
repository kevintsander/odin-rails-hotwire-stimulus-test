Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'tests', to: 'test_stimulus#index'

  # Defines the root path route ("/")
  # root "articles#index"
  root 'test_stimulus#index'
end
