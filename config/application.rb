require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module HippoOne
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    #config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif *.css *.js *.scss *.ttf *.otf *.svg *.eot *.woff *.m4a)
    #config.assets.paths << "#{Rails.root}/app/assets/fonts" 
    #config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    config.assets.precompile += %w( fontawesome-webfont.eot )
    config.assets.precompile += %w( fontawesome-webfont.svg )
    config.assets.precompile += %w( fontawesome-webfont.ttf )
    config.assets.precompile += %w( fontawesome-webfont.woff )
    config.assets.precompile += %w( LANENAR_-webfont.eot )
    config.assets.precompile += %w( LANENAR_-webfont.svg )
    config.assets.precompile += %w( LANENAR_-webfont.ttf )
    config.assets.precompile += %w( LANENAR_-webfont.woff )
    config.assets.precompile = ['*.js', '*.css', '*.png', '*.jpg', '*.jpeg', '*.gif', '*.m4a']   
  end
end
