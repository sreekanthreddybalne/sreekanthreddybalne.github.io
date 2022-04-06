---
layout: page
title: Articles Archive
redirect_from:
  - /articles
---

##### Categories
<ul>
{% for collection in site.collections %}
  {% assign name = collection.label %}
  <li><a href="#{{name}}">{{name | capitalize}}</a></li>
{% endfor %}
</ul>

<hr>

##### Announcements

{% for collection in site.collections %}
  {% assign name = collection.label %}
##### {{name | capitalize}}
<ul>
  {% for page in site[name] %}
    <li><a href="{{page.url}}">{{page.title}}</a></li>
  {% endfor %}
</ul>
  
{% endfor %}