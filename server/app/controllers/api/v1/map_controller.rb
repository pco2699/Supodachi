module Api
  module V1
    class MapController < ApplicationController

      # GET /api/v1/map
      def index
        location = params[:lacation]
        event = params[:event]
        date = params[:date]
        @facility = Facility.all
        aaa = {location: location, event: event, date: date}
        res = @facility
        # render json: res
        render json: aaa
      end

      def show

      end
    end
  end
end