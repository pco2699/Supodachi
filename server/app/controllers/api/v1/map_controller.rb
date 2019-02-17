module Api
  module V1
    class MapController < ApplicationController

      # GET /api/v1/map
      def index
        event = params[:event]
        date = params[:date]
        if params[:location]
          puts params[:location].class
          location = Location.find_by_name(params[:location])
          lat = location.lat
          lon = location.lon
          lat_five = 0.04506686487
          lon_five = 0.05483202358
          @facilities = Facility.where(
              lat: (lat - lat_five)..(lat + lat_five),
              lon: (lon - lon_five)..(lon + lon_five),
              )
        end
        res = @facilities ? @facilities : {}
        render json: res
      end

      def show
      end
    end
  end
end