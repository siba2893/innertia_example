# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include Inertiable
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    super do
      render inertia: 'auth/Login', props: { resource: resource } and return
    end
  end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
