class User < ApplicationRecord
  validates :email_address,
            :password, presence: true
  validates :email_address, uniqueness: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true

  has_many :links, dependent: :destroy

  has_secure_password
end
