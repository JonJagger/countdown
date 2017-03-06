
Countdown::Application.routes.draw do

  get '/'          => 'cplusplus#select'
  get '/cplusplus' => 'cplusplus#select'

end
