require "rails_helper"

RSpec.describe "can mark links as unread", js: true do
  scenario "Mark a link as unread" do
    user = create(:user)
    link = create(:link, user: user, read: true)

    page.set_rack_session(user_id: user.id)

    visit links_path

    within('.link .read-status') do
      expect(page).to have_text("true")
    end

    click_on "Mark as Unread"

    sleep(1)

    within('.link .read-status') do
      expect(page).to have_text("false")
    end

  end
end
