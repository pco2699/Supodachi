require "#{Rails.root}/app/controllers/application_controller.rb"

module Api
  module V1
    class MapController < ApplicationController

      # GET /api/v1/map
      def index
        @facility = Facility.all
        res = @facility
        render json: res
      end

      def show

      end
    end
  end
end