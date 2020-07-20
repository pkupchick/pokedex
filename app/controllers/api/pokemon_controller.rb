class Api::PokemonController < ApplicationController

    def index
      @pokemon = Pokemon.all
      render :index
    end

    def show
        @pokemon = Pokemon.find(params[:id])
        render :show

    end

    def pokemon_params
        require.params(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
    end

end
