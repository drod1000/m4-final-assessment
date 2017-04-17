require 'rails_helper'

RSpec.describe 'can filter by search', js: true do
  before(:each) do
    user = create(:user)
    link_1 = create(:link, user: user, title: 'First Title', url: 'http://url1.com')
    link_2 = create(:link, user: user, title: 'Second Title', url: 'http://url2.com')

    page.set_rack_session(user_id: user.id)

    visit links_path
  end

  scenario 'filter by title' do
    
    within('.link-filter') do
      fill_in 'link-filter', with: 'First'
    end

    sleep(1)
    expect(page).to have_text('First Title')
    expect(page).to_not have_text('Second Title')
  end
end
