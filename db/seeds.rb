User.destroy_all

user = User.create(email_address: 'd@d.com', password: 'd', password_confirmation: 'd')

user.links.create(title: 'Hottest URL', url: 'http://hoturl.com', read: false)

3.times do |i|
  user.links.create(title: "Top URL #{i}", url: "http://topurl#{i}.com", read: true)
end

6.times do |i|
  if i % 2 == 0
    user.links.create(title: "Random URL #{i}", url: "http://someurl#{i}.com", read: false)
  else
    user.links.create(title: "Random URL #{i}", url: "http://someurl#{i}.com", read: true)
  end
end
