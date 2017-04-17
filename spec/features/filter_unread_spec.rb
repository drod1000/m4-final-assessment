require 'rails_helper'

RSpec.describe 'can filter unread links', js: true do
  scenario 'filter to see only unread links' do
    user = create(:user)
    link_1 = user.links.create(title: 'First Title', url: 'http://firsturl.com', read: true)
    link_2 = user.links.create(title: 'Second Title', url: 'http://secondurl.com', read: false)

    page.set_rack_session(user_id: user.id)

    visit links_path

    click_on 'Show Unread'

    sleep(1)

    expect(page).to_not have_text('First Title')
    expect(page).to_not have_text('http://firsturl.com')
    expect(page).to have_text('Second Title')
    expect(page).to have_text('http://secondurl.com')
  end
end
