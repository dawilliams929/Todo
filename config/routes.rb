Todo::Application.routes.draw do
  resources :tasks, :only => [:create, :index]
end
