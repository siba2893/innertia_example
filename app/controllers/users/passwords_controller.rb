# frozen_string_literal: true

class Users::PasswordsController < Devise::PasswordsController
  include Inertiable
  include InertiaFlash
  # GET /resource/password/new
  def new
    super
    render inertia: 'auth/ForgotPassword', props: { resource: resource }
  end

  # POST /resource/password
  # def create
  #   super
  # end

  # GET /resource/password/edit?reset_password_token=abcdef
  def edit
    super
    render inertia: 'auth/ChangePassword', props: {
      resource: resource,
      token: params[:reset_password_token]
    }
  end

  # PUT /resource/password
  # def update
  #   super
  # end

  # protected

  def after_resetting_password_path_for(resource)
    root_path
  end

  # The path used after sending reset password instructions
  def after_sending_reset_password_instructions_path_for(resource_name)
    new_user_session_path
  end
end
