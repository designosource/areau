<!--.page -->
<div role="document" class="page">

  <?php if (!empty($page['video'])): ?>
    <!--/.video -->
    <section class="l-video">
      <div class="top Nop large-12 columns">
        <div id='audio'>
          <audio id="music" controls autoplay>
              <source src="sites/all/themes/areau/sound/06%20Soul%20And%20Onward.m4a" type="audio/mp4" />
          </audio>
        </div>  
        <a id="music_play"><img id="handlers" src="sites/all/themes/areau/images/pauzebtn.png" /></a>
        <div class="Videowrapper">
          <video autoplay="" loop="" class="video">
            <source src="sites/all/themes/areau/videos/intro.mp4" type="video/mp4"></source>
            <source src="sites/all/themes/areau/videos/intro.ogv" type="video/ogg"></source>
            <source src="sites/all/themes/areau/videos/intro.webm" type="video/webm"></source>
         </video>
        </div>
      </div>
    </section>
    <!--/.l-video -->
  <?php endif; ?>

  <!--.l-header region -->
  <header role="banner" class="site-header l-header">

    <?php if ($top_bar): ?>
      <!--.top-bar -->
      <?php if ($top_bar_classes): ?>
      <div class="<?php print $top_bar_classes; ?>">
      <?php endif; ?>
        <nav class="top-bar"<?php print $top_bar_options; ?>>
          <ul class="title-area">
            <li class="name"><h1><?php print $linked_site_name; ?></h1></li>
            <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
          </ul>
          <section class="top-bar-section">
            <?php if ($top_bar_main_menu) :?>
              <?php print $top_bar_main_menu; ?>
            <?php endif; ?>
            <?php if ($top_bar_secondary_menu) :?>
              <?php print $top_bar_secondary_menu; ?>
            <?php endif; ?>
          </section>
        </nav>
      <?php if ($top_bar_classes): ?>
      </div>
      <?php endif; ?>
      <!--/.top-bar -->
    <?php endif; ?>

    <!-- Title, slogan and menu -->
    <?php if ($alt_header): ?>
    <section class="row <?php print $alt_header_classes; ?>">

      <?php if ($linked_logo): print $linked_logo; endif; ?>

      <?php if ($site_name): ?>
        <?php if ($title): ?>
          <div id="site-name" class="element-invisible">
            <strong>
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
            </strong>
          </div>
        <?php else: /* Use h1 when the content title is empty */ ?>
          <h1 id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>
      <?php endif; ?>

      <?php if ($site_slogan): ?>
        <h2 title="<?php print $site_slogan; ?>" class="site-slogan"><?php print $site_slogan; ?></h2>
      <?php endif; ?>

      <?php if ($alt_main_menu): ?>
        <div class="wrap">
          <nav id="main-menu" class="navigation columns large-12" role="navigation">
          <?php print ($alt_main_menu); ?>
          <div class="spacer"></div>
        </nav> <!-- /#main-menu -->
        </div>
      <?php endif; ?>

      <?php if ($alt_secondary_menu): ?>
        <nav id="secondary-menu" class="navigation" role="navigation">
          <?php print $alt_secondary_menu; ?>
        </nav> <!-- /#secondary-menu -->
      <?php endif; ?>

    </section>
    <?php endif; ?>
    <!-- End title, slogan and menu -->

    <?php if (!empty($page['header'])): ?>
      <!--.l-header-region -->
      <section class="l-header-region row">
        <div class="large-12 columns">
          <?php print render($page['header']); ?>
        </div>
      </section>
      <!--/.l-header-region -->
    <?php endif; ?>

  </header>
  <!--/.l-header -->


  <?php if (!empty($page['inhoud'])): ?>
    <!--/.inhoud -->
    <section class="fullW l-inhoud row">
      <div class="Nop large-12 columns">

        <?php print render($page['inhoud']); ?>
      </div>
    </section>
    <!--/.l-inhoud -->
  <?php endif; ?>

  <?php if (!empty($page['featured'])): ?>
    <!--/.featured -->
    <section class="l-featured">
      <div class="large-12 columns">
        <?php print render($page['featured']); ?>
      </div>
    </section>
    <!--/.l-featured -->
  <?php endif; ?>

  <?php if ($messages && !$zurb_foundation_messages_modal): ?>
    <!--/.l-messages -->
    <section class="l-messages row">
      <div class="large-12 columns">
        <?php if ($messages): print $messages; endif; ?>
      </div>
    </section>
    <!--/.l-messages -->
  <?php endif; ?>

  <?php if (!empty($page['help'])): ?>
    <!--/.l-help -->
    <section class="l-help row">
      <div class="large-12 columns">
        <?php print render($page['help']); ?>
      </div>
    </section>
    <!--/.l-help -->
  <?php endif; ?>

  <div class="fullW"></div>
  <main role="main" class="login l-main">
    <div>
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlight panel callout">
          <?php print render($page['highlighted']); ?>
        </div>
      <?php endif; ?>

      <a id="main-content"></a>

      <?php if ($title && !$is_front): ?>
        <?php print render($title_prefix); ?>
        <h1 id="page-title" class="title"><?php print $title; ?></h1>
        <?php print render($title_suffix); ?>
      <?php endif; ?>

      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
        <?php if (!empty($tabs2)): print render($tabs2); endif; ?>
      <?php endif; ?>

      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>

      <?php print render($page['content']); ?>
    </div>
    <!--/.main region -->

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside role="complementary" class="<?php print $sidebar_first_grid; ?> sidebar-first columns sidebar">
        <?php print render($page['sidebar_first']); ?>
      </aside>
    <?php endif; ?>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside role="complementary" class="<?php print $sidebar_sec_grid; ?> sidebar-second columns sidebar">
        <?php print render($page['sidebar_second']); ?>
      </aside>
    <?php endif; ?>
  </main>
  <!--/.main-->

  <?php if (!empty($page['triptych_first']) || !empty($page['triptych_middle']) || !empty($page['triptych_last'])): ?>
    <!--.triptych-->
    <section class="l-triptych row">
      <div class="triptych-first large-4 columns">
        <?php print render($page['triptych_first']); ?>
      </div>
      <div class="triptych-middle large-4 columns">
        <?php print render($page['triptych_middle']); ?>
      </div>
      <div class="triptych-last large-4 columns">
        <?php print render($page['triptych_last']); ?>
      </div>
    </section>
    <!--/.triptych -->
  <?php endif; ?>

  <?php if (!empty($page['footer_firstcolumn']) || !empty($page['footer_secondcolumn']) || !empty($page['footer_thirdcolumn']) || !empty($page['footer_fourthcolumn'])): ?>
    <!--.footer-columns -->
    <section class= "fullW row l-footer-columns">
      <?php  ?>
        <div class="footer-first large-3 columns">
            <p class="no-opacity">test</p>
          <?php print render($page['footer_firstcolumn']); ?>
        </div>
      <?php ?>
      <?php ?>
        <div class="footer-second large-6 columns">
          <?php print render($page['footer_secondcolumn']); ?>
        </div>
      <?php  ?>
      <?php ?>
        <div class="footer-third large-3 columns">
          <?php print render($page['footer_thirdcolumn']); ?>
        </div>
      <?php  ?>
    </section>
    <!--/.footer-columns-->
  <?php endif; ?>

  <!--.l-footer-->
<!--  <footer class="l-footer panel row" role="contentinfo">-->
<!--    --><?php //if (!empty($page['footer'])): ?>
<!--      <div class="footer large-12 columns">-->
<!--        --><?php //print render($page['footer']); ?>
<!--      </div>-->
<!--    --><?php //endif; ?>
<!---->
<!--    --><?php //if ($site_name) :?>
<!--      <div class="copyright large-12 columns">-->
<!--        &copy; --><?php //print date('Y') . ' ' . check_plain($site_name) . ' ' . t('All rights reserved.'); ?>
<!--      </div>-->
<!--    --><?php //endif; ?>
<!--  </footer>-->
  <!--/.footer-->

  <?php if ($messages && $zurb_foundation_messages_modal): print $messages; endif; ?>
</div>
<!--/.page -->
