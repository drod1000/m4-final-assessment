require 'rails_helper'

RSpec.describe 'can filter by search', js: true do
  before(:each) do
    user = create(:user)
    link_1 = create(:link, user: user, title: 'First Title', url: 'http://url1.com')
    link_2 = create(:link, user: user, title: 'Second Title', url: 'http://url2.com')

    page.set_rack_session(user_id: user.id)

    visit links_path
  end

  context 'filter by title' do
    it 'can filter by title' do

      within('.link-filter') do
        fill_in 'link-filter', with: 'First'
      end

      sleep(1)

      expect(page).to have_text('First Title')
      expect(page).to_not have_text('Second Title')
    end

    it 'is case insensitive' do
      within('.link-filter') do
        fill_in 'link-filter', with: 'FIRST'
      end

      sleep(1)

      expect(page).to have_text('First Title')
      expect(page).to_not have_text('Second Title')
    end
  end

  context 'filter by url' do
    it 'can filter by url' do
      within('.link-filter') do
        fill_in 'link-filter', with: 'url2'
      end

      sleep(1)

      expect(page).to_not have_text('http://url1.com')
      expect(page).to have_text('http://url2.com')
    end

    it 'is case insensitive' do
      within('.link-filter') do
        fill_in 'link-filter', with: 'URL2'
      end

      sleep(1)

      expect(page).to_not have_text('http://url1.com')
      expect(page).to have_text('http://url2.com')
    end
  end
end
