import { ComponentConfig } from "./types";

import comp_3d_cardRender from "./render/3d-card";
import { api as comp_3d_cardApi } from "./api/3d-card";
import { controls as comp_3d_cardControls } from "./controls/3d-card";
import { code as comp_3d_cardCode } from "../code-snippets/3d-card";
import comp_3d_marqueeRender from "./render/3d-marquee";
import { api as comp_3d_marqueeApi } from "./api/3d-marquee";
import { controls as comp_3d_marqueeControls } from "./controls/3d-marquee";
import { code as comp_3d_marqueeCode } from "../code-snippets/3d-marquee";
import ai_prompt_boxRender from "./render/ai-prompt-box";
import { api as ai_prompt_boxApi } from "./api/ai-prompt-box";
import { controls as ai_prompt_boxControls } from "./controls/ai-prompt-box";
import { code as ai_prompt_boxCode } from "../code-snippets/ai-prompt-box";
import animated_beamRender from "./render/animated-beam";
import { api as animated_beamApi } from "./api/animated-beam";
import { controls as animated_beamControls } from "./controls/animated-beam";
import { code as animated_beamCode } from "../code-snippets/animated-beam";
import animated_cursorRender from "./render/animated-cursor";
import { api as animated_cursorApi } from "./api/animated-cursor";
import { controls as animated_cursorControls } from "./controls/animated-cursor";
import { code as animated_cursorCode } from "../code-snippets/animated-cursor";
import animated_listRender from "./render/animated-list";
import { api as animated_listApi } from "./api/animated-list";
import { controls as animated_listControls } from "./controls/animated-list";
import { code as animated_listCode } from "../code-snippets/animated-list";
import animated_testimonialsRender from "./render/animated-testimonials";
import { api as animated_testimonialsApi } from "./api/animated-testimonials";
import { controls as animated_testimonialsControls } from "./controls/animated-testimonials";
import { code as animated_testimonialsCode } from "../code-snippets/animated-testimonials";
import animated_theme_toggleRender from "./render/animated-theme-toggle";
import { api as animated_theme_toggleApi } from "./api/animated-theme-toggle";
import { controls as animated_theme_toggleControls } from "./controls/animated-theme-toggle";
import { code as animated_theme_toggleCode } from "../code-snippets/animated-theme-toggle";
import animated_tooltipRender from "./render/animated-tooltip";
import { api as animated_tooltipApi } from "./api/animated-tooltip";
import { controls as animated_tooltipControls } from "./controls/animated-tooltip";
import { code as animated_tooltipCode } from "../code-snippets/animated-tooltip";
import antigravityRender from "./render/antigravity";
import { api as antigravityApi } from "./api/antigravity";
import { controls as antigravityControls } from "./controls/antigravity";
import { code as antigravityCode } from "../code-snippets/antigravity";
import avatar_groupRender from "./render/avatar-group";
import { api as avatar_groupApi } from "./api/avatar-group";
import { controls as avatar_groupControls } from "./controls/avatar-group";
import { code as avatar_groupCode } from "../code-snippets/avatar-group";
import ballpitRender from "./render/ballpit";
import { api as ballpitApi } from "./api/ballpit";
import { controls as ballpitControls } from "./controls/ballpit";
import { code as ballpitCode } from "../code-snippets/ballpit";
import bannerRender from "./render/banner";
import { api as bannerApi } from "./api/banner";
import { controls as bannerControls } from "./controls/banner";
import { code as bannerCode } from "../code-snippets/banner";
import beam_collisionRender from "./render/beam-collision";
import { api as beam_collisionApi } from "./api/beam-collision";
import { controls as beam_collisionControls } from "./controls/beam-collision";
import { code as beam_collisionCode } from "../code-snippets/beam-collision";
import border_beamRender from "./render/border-beam";
import { api as border_beamApi } from "./api/border-beam";
import { controls as border_beamControls } from "./controls/border-beam";
import { code as border_beamCode } from "../code-snippets/border-beam";
import calendarRender from "./render/calendar";
import { api as calendarApi } from "./api/calendar";
import { controls as calendarControls } from "./controls/calendar";
import { code as calendarCode } from "../code-snippets/calendar";
import calendar_inputRender from "./render/calendar-input";
import { api as calendar_inputApi } from "./api/calendar-input";
import { controls as calendar_inputControls } from "./controls/calendar-input";
import { code as calendar_inputCode } from "../code-snippets/calendar-input";
import carouselRender from "./render/carousel";
import { api as carouselApi } from "./api/carousel";
import { controls as carouselControls } from "./controls/carousel";
import { code as carouselCode } from "../code-snippets/carousel";
import circular_galleryRender from "./render/circular-gallery";
import { api as circular_galleryApi } from "./api/circular-gallery";
import { controls as circular_galleryControls } from "./controls/circular-gallery";
import { code as circular_galleryCode } from "../code-snippets/circular-gallery";
import circular_progress_barRender from "./render/circular-progress-bar";
import { api as circular_progress_barApi } from "./api/circular-progress-bar";
import { controls as circular_progress_barControls } from "./controls/circular-progress-bar";
import { code as circular_progress_barCode } from "../code-snippets/circular-progress-bar";
import circular_textRender from "./render/circular-text";
import { api as circular_textApi } from "./api/circular-text";
import { controls as circular_textControls } from "./controls/circular-text";
import { code as circular_textCode } from "../code-snippets/circular-text";
import click_sparkRender from "./render/click-spark";
import { api as click_sparkApi } from "./api/click-spark";
import { controls as click_sparkControls } from "./controls/click-spark";
import { code as click_sparkCode } from "../code-snippets/click-spark";
import code_blockRender from "./render/code-block";
import { api as code_blockApi } from "./api/code-block";
import { controls as code_blockControls } from "./controls/code-block";
import { code as code_blockCode } from "../code-snippets/code-block";
import code_comparisonRender from "./render/code-comparison";
import { api as code_comparisonApi } from "./api/code-comparison";
import { controls as code_comparisonControls } from "./controls/code-comparison";
import { code as code_comparisonCode } from "../code-snippets/code-comparison";
import code_editorRender from "./render/code-editor";
import { api as code_editorApi } from "./api/code-editor";
import { controls as code_editorControls } from "./controls/code-editor";
import { code as code_editorCode } from "../code-snippets/code-editor";
import code_tabsRender from "./render/code-tabs";
import { api as code_tabsApi } from "./api/code-tabs";
import { controls as code_tabsControls } from "./controls/code-tabs";
import { code as code_tabsCode } from "../code-snippets/code-tabs";
import color_bendsRender from "./render/color-bends";
import { api as color_bendsApi } from "./api/color-bends";
import { controls as color_bendsControls } from "./controls/color-bends";
import { code as color_bendsCode } from "../code-snippets/color-bends";
import color_pickerRender from "./render/color-picker";
import { api as color_pickerApi } from "./api/color-picker";
import { controls as color_pickerControls } from "./controls/color-picker";
import { code as color_pickerCode } from "../code-snippets/color-picker";
import comboboxRender from "./render/combobox";
import { api as comboboxApi } from "./api/combobox";
import { controls as comboboxControls } from "./controls/combobox";
import { code as comboboxCode } from "../code-snippets/combobox";
import compact_confettiRender from "./render/compact-confetti";
import { api as compact_confettiApi } from "./api/compact-confetti";
import { controls as compact_confettiControls } from "./controls/compact-confetti";
import { code as compact_confettiCode } from "../code-snippets/compact-confetti";
import comparison_sliderRender from "./render/comparison-slider";
import { api as comparison_sliderApi } from "./api/comparison-slider";
import { controls as comparison_sliderControls } from "./controls/comparison-slider";
import { code as comparison_sliderCode } from "../code-snippets/comparison-slider";
import confettiRender from "./render/confetti";
import { api as confettiApi } from "./api/confetti";
import { controls as confettiControls } from "./controls/confetti";
import { code as confettiCode } from "../code-snippets/confetti";
import copy_buttonRender from "./render/copy-button";
import { api as copy_buttonApi } from "./api/copy-button";
import { controls as copy_buttonControls } from "./controls/copy-button";
import { code as copy_buttonCode } from "../code-snippets/copy-button";
import count_upRender from "./render/count-up";
import { api as count_upApi } from "./api/count-up";
import { controls as count_upControls } from "./controls/count-up";
import { code as count_upCode } from "../code-snippets/count-up";
import counterRender from "./render/counter";
import { api as counterApi } from "./api/counter";
import { controls as counterControls } from "./controls/counter";
import { code as counterCode } from "../code-snippets/counter";
import credit_cardRender from "./render/credit-card";
import { api as credit_cardApi } from "./api/credit-card";
import { controls as credit_cardControls } from "./controls/credit-card";
import { code as credit_cardCode } from "../code-snippets/credit-card";
import curved_marqueeRender from "./render/curved-marquee";
import { api as curved_marqueeApi } from "./api/curved-marquee";
import { controls as curved_marqueeControls } from "./controls/curved-marquee";
import { code as curved_marqueeCode } from "../code-snippets/curved-marquee";
import dark_veilRender from "./render/dark-veil";
import { api as dark_veilApi } from "./api/dark-veil";
import { controls as dark_veilControls } from "./controls/dark-veil";
import { code as dark_veilCode } from "../code-snippets/dark-veil";
import date_wheel_pickerRender from "./render/date-wheel-picker";
import { api as date_wheel_pickerApi } from "./api/date-wheel-picker";
import { controls as date_wheel_pickerControls } from "./controls/date-wheel-picker";
import { code as date_wheel_pickerCode } from "../code-snippets/date-wheel-picker";
import decrypted_textRender from "./render/decrypted-text";
import { api as decrypted_textApi } from "./api/decrypted-text";
import { controls as decrypted_textControls } from "./controls/decrypted-text";
import { code as decrypted_textCode } from "../code-snippets/decrypted-text";
import device_mockRender from "./render/device-mock";
import { api as device_mockApi } from "./api/device-mock";
import { controls as device_mockControls } from "./controls/device-mock";
import device_mock_2Render from "./render/device-mock-2";
import { api as device_mock_2Api } from "./api/device-mock-2";
import { controls as device_mock_2Controls } from "./controls/device-mock-2";
import dockRender from "./render/dock";
import { api as dockApi } from "./api/dock";
import { controls as dockControls } from "./controls/dock";
import { code as dockCode } from "../code-snippets/dock";
import dot_gridRender from "./render/dot-grid";
import { api as dot_gridApi } from "./api/dot-grid";
import { controls as dot_gridControls } from "./controls/dot-grid";
import { code as dot_gridCode } from "../code-snippets/dot-grid";
import draggable_cardRender from "./render/draggable-card";
import { api as draggable_cardApi } from "./api/draggable-card";
import { controls as draggable_cardControls } from "./controls/draggable-card";
import { code as draggable_cardCode } from "../code-snippets/draggable-card";
import dropzoneRender from "./render/dropzone";
import { api as dropzoneApi } from "./api/dropzone";
import { controls as dropzoneControls } from "./controls/dropzone";
import { code as dropzoneCode } from "../code-snippets/dropzone";
import elastic_sliderRender from "./render/elastic-slider";
import { api as elastic_sliderApi } from "./api/elastic-slider";
import { controls as elastic_sliderControls } from "./controls/elastic-slider";
import { code as elastic_sliderCode } from "../code-snippets/elastic-slider";
import electric_borderRender from "./render/electric-border";
import { api as electric_borderApi } from "./api/electric-border";
import { controls as electric_borderControls } from "./controls/electric-border";
import { code as electric_borderCode } from "../code-snippets/electric-border";
import expanded_mapRender from "./render/expanded-map";
import { api as expanded_mapApi } from "./api/expanded-map";
import { controls as expanded_mapControls } from "./controls/expanded-map";
import { code as expanded_mapCode } from "../code-snippets/expanded-map";
import falling_textRender from "./render/falling-text";
import { api as falling_textApi } from "./api/falling-text";
import { controls as falling_textControls } from "./controls/falling-text";
import { code as falling_textCode } from "../code-snippets/falling-text";
import feedback_widgetRender from "./render/feedback-widget";
import { api as feedback_widgetApi } from "./api/feedback-widget";
import { controls as feedback_widgetControls } from "./controls/feedback-widget";
import { code as feedback_widgetCode } from "../code-snippets/feedback-widget";
import file_treeRender from "./render/file-tree";
import { api as file_treeApi } from "./api/file-tree";
import { controls as file_treeControls } from "./controls/file-tree";
import { code as file_treeCode } from "../code-snippets/file-tree";
import fireworksRender from "./render/fireworks";
import { api as fireworksApi } from "./api/fireworks";
import { controls as fireworksControls } from "./controls/fireworks";
import { code as fireworksCode } from "../code-snippets/fireworks";
import flip_buttonRender from "./render/flip-button";
import { api as flip_buttonApi } from "./api/flip-button";
import { controls as flip_buttonControls } from "./controls/flip-button";
import { code as flip_buttonCode } from "../code-snippets/flip-button";
import flip_cardRender from "./render/flip-card";
import { api as flip_cardApi } from "./api/flip-card";
import { controls as flip_cardControls } from "./controls/flip-card";
import { code as flip_cardCode } from "../code-snippets/flip-card";
import flip_textRender from "./render/flip-text";
import { api as flip_textApi } from "./api/flip-text";
import { controls as flip_textControls } from "./controls/flip-text";
import { code as flip_textCode } from "../code-snippets/flip-text";
import floating_linesRender from "./render/floating-lines";
import { api as floating_linesApi } from "./api/floating-lines";
import { controls as floating_linesControls } from "./controls/floating-lines";
import { code as floating_linesCode } from "../code-snippets/floating-lines";
import flowing_menuRender from "./render/flowing-menu";
import { api as flowing_menuApi } from "./api/flowing-menu";
import { controls as flowing_menuControls } from "./controls/flowing-menu";
import { code as flowing_menuCode } from "../code-snippets/flowing-menu";
import fluid_glassRender from "./render/fluid-glass";
import { api as fluid_glassApi } from "./api/fluid-glass";
import { controls as fluid_glassControls } from "./controls/fluid-glass";
import { code as fluid_glassCode } from "../code-snippets/fluid-glass";
import fuzzy_textRender from "./render/fuzzy-text";
import { api as fuzzy_textApi } from "./api/fuzzy-text";
import { controls as fuzzy_textControls } from "./controls/fuzzy-text";
import { code as fuzzy_textCode } from "../code-snippets/fuzzy-text";
import galaxyRender from "./render/galaxy";
import { api as galaxyApi } from "./api/galaxy";
import { controls as galaxyControls } from "./controls/galaxy";
import { code as galaxyCode } from "../code-snippets/galaxy";
import ganttchartRender from "./render/ganttchart";
import { api as ganttchartApi } from "./api/ganttchart";
import { controls as ganttchartControls } from "./controls/ganttchart";
import { code as ganttchartCode } from "../code-snippets/ganttchart";
import ghost_cursorRender from "./render/ghost-cursor";
import { api as ghost_cursorApi } from "./api/ghost-cursor";
import { controls as ghost_cursorControls } from "./controls/ghost-cursor";
import { code as ghost_cursorCode } from "../code-snippets/ghost-cursor";
import github_starRender from "./render/github-star";
import { api as github_starApi } from "./api/github-star";
import { controls as github_starControls } from "./controls/github-star";
import { code as github_starCode } from "../code-snippets/github-star";
import glimpseRender from "./render/glimpse";
import { api as glimpseApi } from "./api/glimpse";
import { controls as glimpseControls } from "./controls/glimpse";
import { code as glimpseCode } from "../code-snippets/glimpse";
import glitch_textRender from "./render/glitch-text";
import { api as glitch_textApi } from "./api/glitch-text";
import { controls as glitch_textControls } from "./controls/glitch-text";
import { code as glitch_textCode } from "../code-snippets/glitch-text";
import gooey_text_morphingRender from "./render/gooey-text-morphing";
import { api as gooey_text_morphingApi } from "./api/gooey-text-morphing";
import { controls as gooey_text_morphingControls } from "./controls/gooey-text-morphing";
import { code as gooey_text_morphingCode } from "../code-snippets/gooey-text-morphing";
import gradient_area_chartRender from "./render/gradient-area-chart";
import { api as gradient_area_chartApi } from "./api/gradient-area-chart";
import { controls as gradient_area_chartControls } from "./controls/gradient-area-chart";
import { code as gradient_area_chartCode } from "../code-snippets/gradient-area-chart";
import gradient_textRender from "./render/gradient-text";
import { api as gradient_textApi } from "./api/gradient-text";
import { controls as gradient_textControls } from "./controls/gradient-text";
import { code as gradient_textCode } from "../code-snippets/gradient-text";
import grid_motionRender from "./render/grid-motion";
import { api as grid_motionApi } from "./api/grid-motion";
import { controls as grid_motionControls } from "./controls/grid-motion";
import { code as grid_motionCode } from "../code-snippets/grid-motion";
import grid_scanRender from "./render/grid-scan";
import { api as grid_scanApi } from "./api/grid-scan";
import { controls as grid_scanControls } from "./controls/grid-scan";
import { code as grid_scanCode } from "../code-snippets/grid-scan";
import hero_parallaxRender from "./render/hero-parallax";
import { api as hero_parallaxApi } from "./api/hero-parallax";
import { controls as hero_parallaxControls } from "./controls/hero-parallax";
import { code as hero_parallaxCode } from "../code-snippets/hero-parallax";
import highlight_textRender from "./render/highlight-text";
import { api as highlight_textApi } from "./api/highlight-text";
import { controls as highlight_textControls } from "./controls/highlight-text";
import { code as highlight_textCode } from "../code-snippets/highlight-text";
import hole_backgroundRender from "./render/hole-background";
import { api as hole_backgroundApi } from "./api/hole-background";
import { controls as hole_backgroundControls } from "./controls/hole-background";
import { code as hole_backgroundCode } from "../code-snippets/hole-background";
import horizontal_barRender from "./render/horizontal-bar";
import { api as horizontal_barApi } from "./api/horizontal-bar";
import { controls as horizontal_barControls } from "./controls/horizontal-bar";
import { code as horizontal_barCode } from "../code-snippets/horizontal-bar";
import hover_previewRender from "./render/hover-preview";
import { api as hover_previewApi } from "./api/hover-preview";
import { controls as hover_previewControls } from "./controls/hover-preview";
import { code as hover_previewCode } from "../code-snippets/hover-preview";
import hyperspeedRender from "./render/hyperspeed";
import { api as hyperspeedApi } from "./api/hyperspeed";
import { controls as hyperspeedControls } from "./controls/hyperspeed";
import { code as hyperspeedCode } from "../code-snippets/hyperspeed";
import icon_cloudRender from "./render/icon-cloud";
import { api as icon_cloudApi } from "./api/icon-cloud";
import { controls as icon_cloudControls } from "./controls/icon-cloud";
import { code as icon_cloudCode } from "../code-snippets/icon-cloud";
import image_compareRender from "./render/image-compare";
import { api as image_compareApi } from "./api/image-compare";
import { controls as image_compareControls } from "./controls/image-compare";
import { code as image_compareCode } from "../code-snippets/image-compare";
import image_cropRender from "./render/image-crop";
import { api as image_cropApi } from "./api/image-crop";
import { controls as image_cropControls } from "./controls/image-crop";
import { code as image_cropCode } from "../code-snippets/image-crop";
import image_sphereRender from "./render/image-sphere";
import { api as image_sphereApi } from "./api/image-sphere";
import { controls as image_sphereControls } from "./controls/image-sphere";
import { code as image_sphereCode } from "../code-snippets/image-sphere";
import image_stackRender from "./render/image-stack";
import { api as image_stackApi } from "./api/image-stack";
import { controls as image_stackControls } from "./controls/image-stack";
import { code as image_stackCode } from "../code-snippets/image-stack";
import image_trailRender from "./render/image-trail";
import { api as image_trailApi } from "./api/image-trail";
import { controls as image_trailControls } from "./controls/image-trail";
import { code as image_trailCode } from "../code-snippets/image-trail";
import image_zoomRender from "./render/image-zoom";
import { api as image_zoomApi } from "./api/image-zoom";
import { controls as image_zoomControls } from "./controls/image-zoom";
import { code as image_zoomCode } from "../code-snippets/image-zoom";
import infinite_menuRender from "./render/infinite-menu";
import { api as infinite_menuApi } from "./api/infinite-menu";
import { controls as infinite_menuControls } from "./controls/infinite-menu";
import { code as infinite_menuCode } from "../code-snippets/infinite-menu";
import interactive_barRender from "./render/interactive-bar";
import { api as interactive_barApi } from "./api/interactive-bar";
import { controls as interactive_barControls } from "./controls/interactive-bar";
import { code as interactive_barCode } from "../code-snippets/interactive-bar";
import interactive_bookRender from "./render/interactive-book";
import { api as interactive_bookApi } from "./api/interactive-book";
import { controls as interactive_bookControls } from "./controls/interactive-book";
import { code as interactive_bookCode } from "../code-snippets/interactive-book";
import kanbanRender from "./render/kanban";
import { api as kanbanApi } from "./api/kanban";
import { controls as kanbanControls } from "./controls/kanban";
import { code as kanbanCode } from "../code-snippets/kanban";
import kbdRender from "./render/kbd";
import { api as kbdApi } from "./api/kbd";
import { controls as kbdControls } from "./controls/kbd";
import { code as kbdCode } from "../code-snippets/kbd";
import lanyardRender from "./render/lanyard";
import { api as lanyardApi } from "./api/lanyard";
import { controls as lanyardControls } from "./controls/lanyard";
import { code as lanyardCode } from "../code-snippets/lanyard";
import laser_flowRender from "./render/laser-flow";
import { api as laser_flowApi } from "./api/laser-flow";
import { controls as laser_flowControls } from "./controls/laser-flow";
import { code as laser_flowCode } from "../code-snippets/laser-flow";
import lensRender from "./render/lens";
import { api as lensApi } from "./api/lens";
import { controls as lensControls } from "./controls/lens";
import { code as lensCode } from "../code-snippets/lens";
import letter_glitchRender from "./render/letter-glitch";
import { api as letter_glitchApi } from "./api/letter-glitch";
import { controls as letter_glitchControls } from "./controls/letter-glitch";
import { code as letter_glitchCode } from "../code-snippets/letter-glitch";
import light_pillarRender from "./render/light-pillar";
import { api as light_pillarApi } from "./api/light-pillar";
import { controls as light_pillarControls } from "./controls/light-pillar";
import { code as light_pillarCode } from "../code-snippets/light-pillar";
import light_raysRender from "./render/light-rays";
import { api as light_raysApi } from "./api/light-rays";
import { controls as light_raysControls } from "./controls/light-rays";
import { code as light_raysCode } from "../code-snippets/light-rays";
import lightningRender from "./render/lightning";
import { api as lightningApi } from "./api/lightning";
import { controls as lightningControls } from "./controls/lightning";
import { code as lightningCode } from "../code-snippets/lightning";
import liquid_etherRender from "./render/liquid-ether";
import { api as liquid_etherApi } from "./api/liquid-ether";
import { controls as liquid_etherControls } from "./controls/liquid-ether";
import { code as liquid_etherCode } from "../code-snippets/liquid-ether";
import liquid_oceanRender from "./render/liquid-ocean";
import { api as liquid_oceanApi } from "./api/liquid-ocean";
import { controls as liquid_oceanControls } from "./controls/liquid-ocean";
import { code as liquid_oceanCode } from "../code-snippets/liquid-ocean";
import liquid_textRender from "./render/liquid-text";
import { api as liquid_textApi } from "./api/liquid-text";
import { controls as liquid_textControls } from "./controls/liquid-text";
import { code as liquid_textCode } from "../code-snippets/liquid-text";
import logo_loopRender from "./render/logo-loop";
import { api as logo_loopApi } from "./api/logo-loop";
import { controls as logo_loopControls } from "./controls/logo-loop";
import { code as logo_loopCode } from "../code-snippets/logo-loop";
import macos_dockRender from "./render/macos-dock";
import { api as macos_dockApi } from "./api/macos-dock";
import { controls as macos_dockControls } from "./controls/macos-dock";
import { code as macos_dockCode } from "../code-snippets/macos-dock";
import magic_bentoRender from "./render/magic-bento";
import { api as magic_bentoApi } from "./api/magic-bento";
import { controls as magic_bentoControls } from "./controls/magic-bento";
import { code as magic_bentoCode } from "../code-snippets/magic-bento";
import magic_cardRender from "./render/magic-card";
import { api as magic_cardApi } from "./api/magic-card";
import { controls as magic_cardControls } from "./controls/magic-card";
import { code as magic_cardCode } from "../code-snippets/magic-card";
import magnet_linesRender from "./render/magnet-lines";
import { api as magnet_linesApi } from "./api/magnet-lines";
import { controls as magnet_linesControls } from "./controls/magnet-lines";
import { code as magnet_linesCode } from "../code-snippets/magnet-lines";
import management_barRender from "./render/management-bar";
import { api as management_barApi } from "./api/management-bar";
import { controls as management_barControls } from "./controls/management-bar";
import { code as management_barCode } from "../code-snippets/management-bar";
import marqueeRender from "./render/marquee";
import { api as marqueeApi } from "./api/marquee";
import { controls as marqueeControls } from "./controls/marquee";
import { code as marqueeCode } from "../code-snippets/marquee";
import masonryRender from "./render/masonry";
import { api as masonryApi } from "./api/masonry";
import { controls as masonryControls } from "./controls/masonry";
import { code as masonryCode } from "../code-snippets/masonry";
import meteorsRender from "./render/meteors";
import { api as meteorsApi } from "./api/meteors";
import { controls as meteorsControls } from "./controls/meteors";
import { code as meteorsCode } from "../code-snippets/meteors";
import mini_calendarRender from "./render/mini-calendar";
import { api as mini_calendarApi } from "./api/mini-calendar";
import { controls as mini_calendarControls } from "./controls/mini-calendar";
import { code as mini_calendarCode } from "../code-snippets/mini-calendar";
import modal_viewerRender from "./render/modal-viewer";
import { api as modal_viewerApi } from "./api/modal-viewer";
import { controls as modal_viewerControls } from "./controls/modal-viewer";
import { code as modal_viewerCode } from "../code-snippets/modal-viewer";
import motion_carouselRender from "./render/motion-carousel";
import { api as motion_carouselApi } from "./api/motion-carousel";
import { controls as motion_carouselControls } from "./controls/motion-carousel";
import { code as motion_carouselCode } from "../code-snippets/motion-carousel";
import neon_gradient_cardRender from "./render/neon-gradient-card";
import { api as neon_gradient_cardApi } from "./api/neon-gradient-card";
import { controls as neon_gradient_cardControls } from "./controls/neon-gradient-card";
import { code as neon_gradient_cardCode } from "../code-snippets/neon-gradient-card";
import number_counterRender from "./render/number-counter";
import { api as number_counterApi } from "./api/number-counter";
import { controls as number_counterControls } from "./controls/number-counter";
import { code as number_counterCode } from "../code-snippets/number-counter";
import orbitsRender from "./render/orbits";
import { api as orbitsApi } from "./api/orbits";
import { controls as orbitsControls } from "./controls/orbits";
import { code as orbitsCode } from "../code-snippets/orbits";
import orbsRender from "./render/orbs";
import { api as orbsApi } from "./api/orbs";
import { controls as orbsControls } from "./controls/orbs";
import { code as orbsCode } from "../code-snippets/orbs";
import particlesRender from "./render/particles";
import { api as particlesApi } from "./api/particles";
import { controls as particlesControls } from "./controls/particles";
import { code as particlesCode } from "../code-snippets/particles";
import perspective_gridRender from "./render/perspective-grid";
import { api as perspective_gridApi } from "./api/perspective-grid";
import { controls as perspective_gridControls } from "./controls/perspective-grid";
import { code as perspective_gridCode } from "../code-snippets/perspective-grid";
import pie_donutRender from "./render/pie-donut";
import { api as pie_donutApi } from "./api/pie-donut";
import { controls as pie_donutControls } from "./controls/pie-donut";
import { code as pie_donutCode } from "../code-snippets/pie-donut";
import pin_listRender from "./render/pin-list";
import { api as pin_listApi } from "./api/pin-list";
import { controls as pin_listControls } from "./controls/pin-list";
import { code as pin_listCode } from "../code-snippets/pin-list";
import playful_todolistRender from "./render/playful-todolist";
import { api as playful_todolistApi } from "./api/playful-todolist";
import { controls as playful_todolistControls } from "./controls/playful-todolist";
import { code as playful_todolistCode } from "../code-snippets/playful-todolist";
import popoverRender from "./render/popover";
import { api as popoverApi } from "./api/popover";
import { controls as popoverControls } from "./controls/popover";
import { code as popoverCode } from "../code-snippets/popover";
import prismRender from "./render/prism";
import { api as prismApi } from "./api/prism";
import { controls as prismControls } from "./controls/prism";
import { code as prismCode } from "../code-snippets/prism";
import progressRender from "./render/progress";
import { api as progressApi } from "./api/progress";
import { controls as progressControls } from "./controls/progress";
import { code as progressCode } from "../code-snippets/progress";
import qr_codeRender from "./render/qr-code";
import { api as qr_codeApi } from "./api/qr-code";
import { controls as qr_codeControls } from "./controls/qr-code";
import { code as qr_codeCode } from "../code-snippets/qr-code";
import radar_chartRender from "./render/radar-chart";
import { api as radar_chartApi } from "./api/radar-chart";
import { controls as radar_chartControls } from "./controls/radar-chart";
import { code as radar_chartCode } from "../code-snippets/radar-chart";
import radial_introRender from "./render/radial-intro";
import { api as radial_introApi } from "./api/radial-intro";
import { controls as radial_introControls } from "./controls/radial-intro";
import { code as radial_introCode } from "../code-snippets/radial-intro";
import radial_menuRender from "./render/radial-menu";
import { api as radial_menuApi } from "./api/radial-menu";
import { controls as radial_menuControls } from "./controls/radial-menu";
import { code as radial_menuCode } from "../code-snippets/radial-menu";
import rainRender from "./render/rain";
import { api as rainApi } from "./api/rain";
import { controls as rainControls } from "./controls/rain";
import { code as rainCode } from "../code-snippets/rain";
import rainbow_buttonRender from "./render/rainbow-button";
import { api as rainbow_buttonApi } from "./api/rainbow-button";
import { controls as rainbow_buttonControls } from "./controls/rainbow-button";
import { code as rainbow_buttonCode } from "../code-snippets/rainbow-button";
import ratingRender from "./render/rating";
import { api as ratingApi } from "./api/rating";
import { controls as ratingControls } from "./controls/rating";
import { code as ratingCode } from "../code-snippets/rating";
import reveal_loaderRender from "./render/reveal-loader";
import { api as reveal_loaderApi } from "./api/reveal-loader";
import { controls as reveal_loaderControls } from "./controls/reveal-loader";
import { code as reveal_loaderCode } from "../code-snippets/reveal-loader";
import ripple_buttonRender from "./render/ripple-button";
import { api as ripple_buttonApi } from "./api/ripple-button";
import { controls as ripple_buttonControls } from "./controls/ripple-button";
import { code as ripple_buttonCode } from "../code-snippets/ripple-button";
import rotate_textRender from "./render/rotate-text";
import { api as rotate_textApi } from "./api/rotate-text";
import { controls as rotate_textControls } from "./controls/rotate-text";
import { code as rotate_textCode } from "../code-snippets/rotate-text";
import rotating_textRender from "./render/rotating-text";
import { api as rotating_textApi } from "./api/rotating-text";
import { controls as rotating_textControls } from "./controls/rotating-text";
import { code as rotating_textCode } from "../code-snippets/rotating-text";
import sandboxRender from "./render/sandbox";
import { api as sandboxApi } from "./api/sandbox";
import { controls as sandboxControls } from "./controls/sandbox";
import { code as sandboxCode } from "../code-snippets/sandbox";
import scroll_floatRender from "./render/scroll-float";
import { api as scroll_floatApi } from "./api/scroll-float";
import { controls as scroll_floatControls } from "./controls/scroll-float";
import { code as scroll_floatCode } from "../code-snippets/scroll-float";
import scroll_progressRender from "./render/scroll-progress";
import { api as scroll_progressApi } from "./api/scroll-progress";
import { controls as scroll_progressControls } from "./controls/scroll-progress";
import { code as scroll_progressCode } from "../code-snippets/scroll-progress";
import scroll_revealRender from "./render/scroll-reveal";
import { api as scroll_revealApi } from "./api/scroll-reveal";
import { controls as scroll_revealControls } from "./controls/scroll-reveal";
import { code as scroll_revealCode } from "../code-snippets/scroll-reveal";
import scroll_stackRender from "./render/scroll-stack";
import { api as scroll_stackApi } from "./api/scroll-stack";
import { controls as scroll_stackControls } from "./controls/scroll-stack";
import { code as scroll_stackCode } from "../code-snippets/scroll-stack";
import scroll_velocityRender from "./render/scroll-velocity";
import { api as scroll_velocityApi } from "./api/scroll-velocity";
import { controls as scroll_velocityControls } from "./controls/scroll-velocity";
import { code as scroll_velocityCode } from "../code-snippets/scroll-velocity";
import sheetRender from "./render/sheet";
import { api as sheetApi } from "./api/sheet";
import { controls as sheetControls } from "./controls/sheet";
import { code as sheetCode } from "../code-snippets/sheet";
import shine_borderRender from "./render/shine-border";
import { api as shine_borderApi } from "./api/shine-border";
import { controls as shine_borderControls } from "./controls/shine-border";
import { code as shine_borderCode } from "../code-snippets/shine-border";
import shiny_textRender from "./render/shiny-text";
import { api as shiny_textApi } from "./api/shiny-text";
import { controls as shiny_textControls } from "./controls/shiny-text";
import { code as shiny_textCode } from "../code-snippets/shiny-text";
import snowRender from "./render/snow";
import { api as snowApi } from "./api/snow";
import { controls as snowControls } from "./controls/snow";
import { code as snowCode } from "../code-snippets/snow";
import sparkles_textRender from "./render/sparkles-text";
import { api as sparkles_textApi } from "./api/sparkles-text";
import { controls as sparkles_textControls } from "./controls/sparkles-text";
import { code as sparkles_textCode } from "../code-snippets/sparkles-text";
import spinnerRender from "./render/spinner";
import { api as spinnerApi } from "./api/spinner";
import { controls as spinnerControls } from "./controls/spinner";
import { code as spinnerCode } from "../code-snippets/spinner";
import splash_cursorRender from "./render/splash-cursor";
import { api as splash_cursorApi } from "./api/splash-cursor";
import { controls as splash_cursorControls } from "./controls/splash-cursor";
import { code as splash_cursorCode } from "../code-snippets/splash-cursor";
import split_textRender from "./render/split-text";
import { api as split_textApi } from "./api/split-text";
import { controls as split_textControls } from "./controls/split-text";
import { code as split_textCode } from "../code-snippets/split-text";
import spotlight_cardRender from "./render/spotlight-card";
import { api as spotlight_cardApi } from "./api/spotlight-card";
import { controls as spotlight_cardControls } from "./controls/spotlight-card";
import { code as spotlight_cardCode } from "../code-snippets/spotlight-card";
import star_borderRender from "./render/star-border";
import { api as star_borderApi } from "./api/star-border";
import { controls as star_borderControls } from "./controls/star-border";
import { code as star_borderCode } from "../code-snippets/star-border";
import statusRender from "./render/status";
import { api as statusApi } from "./api/status";
import { controls as statusControls } from "./controls/status";
import { code as statusCode } from "../code-snippets/status";
import stepperRender from "./render/stepper";
import { api as stepperApi } from "./api/stepper";
import { controls as stepperControls } from "./controls/stepper";
import { code as stepperCode } from "../code-snippets/stepper";
import sticker_peelRender from "./render/sticker-peel";
import { api as sticker_peelApi } from "./api/sticker-peel";
import { controls as sticker_peelControls } from "./controls/sticker-peel";
import { code as sticker_peelCode } from "../code-snippets/sticker-peel";
import tabsRender from "./render/tabs";
import { api as tabsApi } from "./api/tabs";
import { controls as tabsControls } from "./controls/tabs";
import { code as tabsCode } from "../code-snippets/tabs";
import tagsRender from "./render/tags";
import { api as tagsApi } from "./api/tags";
import { controls as tagsControls } from "./controls/tags";
import { code as tagsCode } from "../code-snippets/tags";
import target_cursorRender from "./render/target-cursor";
import { api as target_cursorApi } from "./api/target-cursor";
import { controls as target_cursorControls } from "./controls/target-cursor";
import { code as target_cursorCode } from "../code-snippets/target-cursor";
import terminalRender from "./render/terminal";
import { api as terminalApi } from "./api/terminal";
import { controls as terminalControls } from "./controls/terminal";
import { code as terminalCode } from "../code-snippets/terminal";
import text_cursorRender from "./render/text-cursor";
import { api as text_cursorApi } from "./api/text-cursor";
import { controls as text_cursorControls } from "./controls/text-cursor";
import { code as text_cursorCode } from "../code-snippets/text-cursor";
import text_revealRender from "./render/text-reveal";
import { api as text_revealApi } from "./api/text-reveal";
import { controls as text_revealControls } from "./controls/text-reveal";
import { code as text_revealCode } from "../code-snippets/text-reveal";
import typewriter_textRender from "./render/typewriter-text";
import { api as typewriter_textApi } from "./api/typewriter-text";
import { controls as typewriter_textControls } from "./controls/typewriter-text";
import { code as typewriter_textCode } from "../code-snippets/typewriter-text";
import variable_proximityRender from "./render/variable-proximity";
import { api as variable_proximityApi } from "./api/variable-proximity";
import { controls as variable_proximityControls } from "./controls/variable-proximity";
import { code as variable_proximityCode } from "../code-snippets/variable-proximity";
import video_playerRender from "./render/video-player";
import { api as video_playerApi } from "./api/video-player";
import { controls as video_playerControls } from "./controls/video-player";
import { code as video_playerCode } from "../code-snippets/video-player";
import video_textRender from "./render/video-text";
import { api as video_textApi } from "./api/video-text";
import { controls as video_textControls } from "./controls/video-text";
import { code as video_textCode } from "../code-snippets/video-text";
import vortexRender from "./render/vortex";
import { api as vortexApi } from "./api/vortex";
import { controls as vortexControls } from "./controls/vortex";
import { code as vortexCode } from "../code-snippets/vortex";
const device_mockCode = undefined;
const device_mock_2Code = undefined;

export const registry: Record<string, ComponentConfig> = {
  "3d-card": {
    render: comp_3d_cardRender,
    api: comp_3d_cardApi,
    controls: comp_3d_cardControls,
    code: comp_3d_cardCode,
  },
  "3d-marquee": {
    render: comp_3d_marqueeRender,
    api: comp_3d_marqueeApi,
    controls: comp_3d_marqueeControls,
    code: comp_3d_marqueeCode,
  },
  "ai-prompt-box": {
    render: ai_prompt_boxRender,
    api: ai_prompt_boxApi,
    controls: ai_prompt_boxControls,
    code: ai_prompt_boxCode,
  },
  "animated-beam": {
    render: animated_beamRender,
    api: animated_beamApi,
    controls: animated_beamControls,
    code: animated_beamCode,
  },
  "animated-cursor": {
    render: animated_cursorRender,
    api: animated_cursorApi,
    controls: animated_cursorControls,
    code: animated_cursorCode,
  },
  "animated-list": {
    render: animated_listRender,
    api: animated_listApi,
    controls: animated_listControls,
    code: animated_listCode,
  },
  "animated-testimonials": {
    render: animated_testimonialsRender,
    api: animated_testimonialsApi,
    controls: animated_testimonialsControls,
    code: animated_testimonialsCode,
  },
  "animated-theme-toggle": {
    render: animated_theme_toggleRender,
    api: animated_theme_toggleApi,
    controls: animated_theme_toggleControls,
    code: animated_theme_toggleCode,
  },
  "animated-tooltip": {
    render: animated_tooltipRender,
    api: animated_tooltipApi,
    controls: animated_tooltipControls,
    code: animated_tooltipCode,
  },
  antigravity: {
    render: antigravityRender,
    api: antigravityApi,
    controls: antigravityControls,
    code: antigravityCode,
  },
  "avatar-group": {
    render: avatar_groupRender,
    api: avatar_groupApi,
    controls: avatar_groupControls,
    code: avatar_groupCode,
  },
  ballpit: {
    render: ballpitRender,
    api: ballpitApi,
    controls: ballpitControls,
    code: ballpitCode,
  },
  banner: {
    render: bannerRender,
    api: bannerApi,
    controls: bannerControls,
    code: bannerCode,
  },
  "beam-collision": {
    render: beam_collisionRender,
    api: beam_collisionApi,
    controls: beam_collisionControls,
    code: beam_collisionCode,
  },
  "border-beam": {
    render: border_beamRender,
    api: border_beamApi,
    controls: border_beamControls,
    code: border_beamCode,
  },
  calendar: {
    render: calendarRender,
    api: calendarApi,
    controls: calendarControls,
    code: calendarCode,
  },
  "calendar-input": {
    render: calendar_inputRender,
    api: calendar_inputApi,
    controls: calendar_inputControls,
    code: calendar_inputCode,
  },
  carousel: {
    render: carouselRender,
    api: carouselApi,
    controls: carouselControls,
    code: carouselCode,
  },
  "circular-gallery": {
    render: circular_galleryRender,
    api: circular_galleryApi,
    controls: circular_galleryControls,
    code: circular_galleryCode,
  },
  "circular-progress-bar": {
    render: circular_progress_barRender,
    api: circular_progress_barApi,
    controls: circular_progress_barControls,
    code: circular_progress_barCode,
  },
  "circular-text": {
    render: circular_textRender,
    api: circular_textApi,
    controls: circular_textControls,
    code: circular_textCode,
  },
  "click-spark": {
    render: click_sparkRender,
    api: click_sparkApi,
    controls: click_sparkControls,
    code: click_sparkCode,
  },
  "code-block": {
    render: code_blockRender,
    api: code_blockApi,
    controls: code_blockControls,
    code: code_blockCode,
  },
  "code-comparison": {
    render: code_comparisonRender,
    api: code_comparisonApi,
    controls: code_comparisonControls,
    code: code_comparisonCode,
  },
  "code-editor": {
    render: code_editorRender,
    api: code_editorApi,
    controls: code_editorControls,
    code: code_editorCode,
  },
  "code-tabs": {
    render: code_tabsRender,
    api: code_tabsApi,
    controls: code_tabsControls,
    code: code_tabsCode,
  },
  "color-bends": {
    render: color_bendsRender,
    api: color_bendsApi,
    controls: color_bendsControls,
    code: color_bendsCode,
  },
  "color-picker": {
    render: color_pickerRender,
    api: color_pickerApi,
    controls: color_pickerControls,
    code: color_pickerCode,
  },
  combobox: {
    render: comboboxRender,
    api: comboboxApi,
    controls: comboboxControls,
    code: comboboxCode,
  },
  "compact-confetti": {
    render: compact_confettiRender,
    api: compact_confettiApi,
    controls: compact_confettiControls,
    code: compact_confettiCode,
  },
  "comparison-slider": {
    render: comparison_sliderRender,
    api: comparison_sliderApi,
    controls: comparison_sliderControls,
    code: comparison_sliderCode,
  },
  confetti: {
    render: confettiRender,
    api: confettiApi,
    controls: confettiControls,
    code: confettiCode,
  },
  "copy-button": {
    render: copy_buttonRender,
    api: copy_buttonApi,
    controls: copy_buttonControls,
    code: copy_buttonCode,
  },
  "count-up": {
    render: count_upRender,
    api: count_upApi,
    controls: count_upControls,
    code: count_upCode,
  },
  counter: {
    render: counterRender,
    api: counterApi,
    controls: counterControls,
    code: counterCode,
  },
  "credit-card": {
    render: credit_cardRender,
    api: credit_cardApi,
    controls: credit_cardControls,
    code: credit_cardCode,
  },
  "curved-marquee": {
    render: curved_marqueeRender,
    api: curved_marqueeApi,
    controls: curved_marqueeControls,
    code: curved_marqueeCode,
  },
  "dark-veil": {
    render: dark_veilRender,
    api: dark_veilApi,
    controls: dark_veilControls,
    code: dark_veilCode,
  },
  "date-wheel-picker": {
    render: date_wheel_pickerRender,
    api: date_wheel_pickerApi,
    controls: date_wheel_pickerControls,
    code: date_wheel_pickerCode,
  },
  "decrypted-text": {
    render: decrypted_textRender,
    api: decrypted_textApi,
    controls: decrypted_textControls,
    code: decrypted_textCode,
  },
  "device-mock": {
    render: device_mockRender,
    api: device_mockApi,
    controls: device_mockControls,
    code: device_mockCode,
  },
  "device-mock-2": {
    render: device_mock_2Render,
    api: device_mock_2Api,
    controls: device_mock_2Controls,
    code: device_mock_2Code,
  },
  dock: {
    render: dockRender,
    api: dockApi,
    controls: dockControls,
    code: dockCode,
  },
  "dot-grid": {
    render: dot_gridRender,
    api: dot_gridApi,
    controls: dot_gridControls,
    code: dot_gridCode,
  },
  "draggable-card": {
    render: draggable_cardRender,
    api: draggable_cardApi,
    controls: draggable_cardControls,
    code: draggable_cardCode,
  },
  dropzone: {
    render: dropzoneRender,
    api: dropzoneApi,
    controls: dropzoneControls,
    code: dropzoneCode,
  },
  "elastic-slider": {
    render: elastic_sliderRender,
    api: elastic_sliderApi,
    controls: elastic_sliderControls,
    code: elastic_sliderCode,
  },
  "electric-border": {
    render: electric_borderRender,
    api: electric_borderApi,
    controls: electric_borderControls,
    code: electric_borderCode,
  },
  "expanded-map": {
    render: expanded_mapRender,
    api: expanded_mapApi,
    controls: expanded_mapControls,
    code: expanded_mapCode,
  },
  "falling-text": {
    render: falling_textRender,
    api: falling_textApi,
    controls: falling_textControls,
    code: falling_textCode,
  },
  "feedback-widget": {
    render: feedback_widgetRender,
    api: feedback_widgetApi,
    controls: feedback_widgetControls,
    code: feedback_widgetCode,
  },
  "file-tree": {
    render: file_treeRender,
    api: file_treeApi,
    controls: file_treeControls,
    code: file_treeCode,
  },
  fireworks: {
    render: fireworksRender,
    api: fireworksApi,
    controls: fireworksControls,
    code: fireworksCode,
  },
  "flip-button": {
    render: flip_buttonRender,
    api: flip_buttonApi,
    controls: flip_buttonControls,
    code: flip_buttonCode,
  },
  "flip-card": {
    render: flip_cardRender,
    api: flip_cardApi,
    controls: flip_cardControls,
    code: flip_cardCode,
  },
  "flip-text": {
    render: flip_textRender,
    api: flip_textApi,
    controls: flip_textControls,
    code: flip_textCode,
  },
  "floating-lines": {
    render: floating_linesRender,
    api: floating_linesApi,
    controls: floating_linesControls,
    code: floating_linesCode,
  },
  "flowing-menu": {
    render: flowing_menuRender,
    api: flowing_menuApi,
    controls: flowing_menuControls,
    code: flowing_menuCode,
  },
  "fluid-glass": {
    render: fluid_glassRender,
    api: fluid_glassApi,
    controls: fluid_glassControls,
    code: fluid_glassCode,
  },
  "fuzzy-text": {
    render: fuzzy_textRender,
    api: fuzzy_textApi,
    controls: fuzzy_textControls,
    code: fuzzy_textCode,
  },
  galaxy: {
    render: galaxyRender,
    api: galaxyApi,
    controls: galaxyControls,
    code: galaxyCode,
  },
  ganttchart: {
    render: ganttchartRender,
    api: ganttchartApi,
    controls: ganttchartControls,
    code: ganttchartCode,
  },
  "ghost-cursor": {
    render: ghost_cursorRender,
    api: ghost_cursorApi,
    controls: ghost_cursorControls,
    code: ghost_cursorCode,
  },
  "github-star": {
    render: github_starRender,
    api: github_starApi,
    controls: github_starControls,
    code: github_starCode,
  },
  glimpse: {
    render: glimpseRender,
    api: glimpseApi,
    controls: glimpseControls,
    code: glimpseCode,
  },
  "glitch-text": {
    render: glitch_textRender,
    api: glitch_textApi,
    controls: glitch_textControls,
    code: glitch_textCode,
  },
  "gooey-text-morphing": {
    render: gooey_text_morphingRender,
    api: gooey_text_morphingApi,
    controls: gooey_text_morphingControls,
    code: gooey_text_morphingCode,
  },
  "gradient-area-chart": {
    render: gradient_area_chartRender,
    api: gradient_area_chartApi,
    controls: gradient_area_chartControls,
    code: gradient_area_chartCode,
  },
  "gradient-text": {
    render: gradient_textRender,
    api: gradient_textApi,
    controls: gradient_textControls,
    code: gradient_textCode,
  },
  "grid-motion": {
    render: grid_motionRender,
    api: grid_motionApi,
    controls: grid_motionControls,
    code: grid_motionCode,
  },
  "grid-scan": {
    render: grid_scanRender,
    api: grid_scanApi,
    controls: grid_scanControls,
    code: grid_scanCode,
  },
  "hero-parallax": {
    render: hero_parallaxRender,
    api: hero_parallaxApi,
    controls: hero_parallaxControls,
    code: hero_parallaxCode,
  },
  "highlight-text": {
    render: highlight_textRender,
    api: highlight_textApi,
    controls: highlight_textControls,
    code: highlight_textCode,
  },
  "hole-background": {
    render: hole_backgroundRender,
    api: hole_backgroundApi,
    controls: hole_backgroundControls,
    code: hole_backgroundCode,
  },
  "horizontal-bar": {
    render: horizontal_barRender,
    api: horizontal_barApi,
    controls: horizontal_barControls,
    code: horizontal_barCode,
  },
  "hover-preview": {
    render: hover_previewRender,
    api: hover_previewApi,
    controls: hover_previewControls,
    code: hover_previewCode,
  },
  hyperspeed: {
    render: hyperspeedRender,
    api: hyperspeedApi,
    controls: hyperspeedControls,
    code: hyperspeedCode,
  },
  "icon-cloud": {
    render: icon_cloudRender,
    api: icon_cloudApi,
    controls: icon_cloudControls,
    code: icon_cloudCode,
  },
  "image-compare": {
    render: image_compareRender,
    api: image_compareApi,
    controls: image_compareControls,
    code: image_compareCode,
  },
  "image-crop": {
    render: image_cropRender,
    api: image_cropApi,
    controls: image_cropControls,
    code: image_cropCode,
  },
  "image-sphere": {
    render: image_sphereRender,
    api: image_sphereApi,
    controls: image_sphereControls,
    code: image_sphereCode,
  },
  "image-stack": {
    render: image_stackRender,
    api: image_stackApi,
    controls: image_stackControls,
    code: image_stackCode,
  },
  "image-trail": {
    render: image_trailRender,
    api: image_trailApi,
    controls: image_trailControls,
    code: image_trailCode,
  },
  "image-zoom": {
    render: image_zoomRender,
    api: image_zoomApi,
    controls: image_zoomControls,
    code: image_zoomCode,
  },
  "infinite-menu": {
    render: infinite_menuRender,
    api: infinite_menuApi,
    controls: infinite_menuControls,
    code: infinite_menuCode,
  },
  "interactive-bar": {
    render: interactive_barRender,
    api: interactive_barApi,
    controls: interactive_barControls,
    code: interactive_barCode,
  },
  "interactive-book": {
    render: interactive_bookRender,
    api: interactive_bookApi,
    controls: interactive_bookControls,
    code: interactive_bookCode,
  },
  kanban: {
    render: kanbanRender,
    api: kanbanApi,
    controls: kanbanControls,
    code: kanbanCode,
  },
  kbd: {
    render: kbdRender,
    api: kbdApi,
    controls: kbdControls,
    code: kbdCode,
  },
  lanyard: {
    render: lanyardRender,
    api: lanyardApi,
    controls: lanyardControls,
    code: lanyardCode,
  },
  "laser-flow": {
    render: laser_flowRender,
    api: laser_flowApi,
    controls: laser_flowControls,
    code: laser_flowCode,
  },
  lens: {
    render: lensRender,
    api: lensApi,
    controls: lensControls,
    code: lensCode,
  },
  "letter-glitch": {
    render: letter_glitchRender,
    api: letter_glitchApi,
    controls: letter_glitchControls,
    code: letter_glitchCode,
  },
  "light-pillar": {
    render: light_pillarRender,
    api: light_pillarApi,
    controls: light_pillarControls,
    code: light_pillarCode,
  },
  "light-rays": {
    render: light_raysRender,
    api: light_raysApi,
    controls: light_raysControls,
    code: light_raysCode,
  },
  lightning: {
    render: lightningRender,
    api: lightningApi,
    controls: lightningControls,
    code: lightningCode,
  },
  "liquid-ether": {
    render: liquid_etherRender,
    api: liquid_etherApi,
    controls: liquid_etherControls,
    code: liquid_etherCode,
  },
  "liquid-ocean": {
    render: liquid_oceanRender,
    api: liquid_oceanApi,
    controls: liquid_oceanControls,
    code: liquid_oceanCode,
  },
  "liquid-text": {
    render: liquid_textRender,
    api: liquid_textApi,
    controls: liquid_textControls,
    code: liquid_textCode,
  },
  "logo-loop": {
    render: logo_loopRender,
    api: logo_loopApi,
    controls: logo_loopControls,
    code: logo_loopCode,
  },
  "macos-dock": {
    render: macos_dockRender,
    api: macos_dockApi,
    controls: macos_dockControls,
    code: macos_dockCode,
  },
  "magic-bento": {
    render: magic_bentoRender,
    api: magic_bentoApi,
    controls: magic_bentoControls,
    code: magic_bentoCode,
  },
  "magic-card": {
    render: magic_cardRender,
    api: magic_cardApi,
    controls: magic_cardControls,
    code: magic_cardCode,
  },
  "magnet-lines": {
    render: magnet_linesRender,
    api: magnet_linesApi,
    controls: magnet_linesControls,
    code: magnet_linesCode,
  },
  "management-bar": {
    render: management_barRender,
    api: management_barApi,
    controls: management_barControls,
    code: management_barCode,
  },
  marquee: {
    render: marqueeRender,
    api: marqueeApi,
    controls: marqueeControls,
    code: marqueeCode,
  },
  masonry: {
    render: masonryRender,
    api: masonryApi,
    controls: masonryControls,
    code: masonryCode,
  },
  meteors: {
    render: meteorsRender,
    api: meteorsApi,
    controls: meteorsControls,
    code: meteorsCode,
  },
  "mini-calendar": {
    render: mini_calendarRender,
    api: mini_calendarApi,
    controls: mini_calendarControls,
    code: mini_calendarCode,
  },
  "modal-viewer": {
    render: modal_viewerRender,
    api: modal_viewerApi,
    controls: modal_viewerControls,
    code: modal_viewerCode,
  },
  "motion-carousel": {
    render: motion_carouselRender,
    api: motion_carouselApi,
    controls: motion_carouselControls,
    code: motion_carouselCode,
  },
  "neon-gradient-card": {
    render: neon_gradient_cardRender,
    api: neon_gradient_cardApi,
    controls: neon_gradient_cardControls,
    code: neon_gradient_cardCode,
  },
  "number-counter": {
    render: number_counterRender,
    api: number_counterApi,
    controls: number_counterControls,
    code: number_counterCode,
  },
  orbits: {
    render: orbitsRender,
    api: orbitsApi,
    controls: orbitsControls,
    code: orbitsCode,
  },
  orbs: {
    render: orbsRender,
    api: orbsApi,
    controls: orbsControls,
    code: orbsCode,
  },
  particles: {
    render: particlesRender,
    api: particlesApi,
    controls: particlesControls,
    code: particlesCode,
  },
  "perspective-grid": {
    render: perspective_gridRender,
    api: perspective_gridApi,
    controls: perspective_gridControls,
    code: perspective_gridCode,
  },
  "pie-donut": {
    render: pie_donutRender,
    api: pie_donutApi,
    controls: pie_donutControls,
    code: pie_donutCode,
  },
  "pin-list": {
    render: pin_listRender,
    api: pin_listApi,
    controls: pin_listControls,
    code: pin_listCode,
  },
  "playful-todolist": {
    render: playful_todolistRender,
    api: playful_todolistApi,
    controls: playful_todolistControls,
    code: playful_todolistCode,
  },
  popover: {
    render: popoverRender,
    api: popoverApi,
    controls: popoverControls,
    code: popoverCode,
  },
  prism: {
    render: prismRender,
    api: prismApi,
    controls: prismControls,
    code: prismCode,
  },
  progress: {
    render: progressRender,
    api: progressApi,
    controls: progressControls,
    code: progressCode,
  },
  "qr-code": {
    render: qr_codeRender,
    api: qr_codeApi,
    controls: qr_codeControls,
    code: qr_codeCode,
  },
  "radar-chart": {
    render: radar_chartRender,
    api: radar_chartApi,
    controls: radar_chartControls,
    code: radar_chartCode,
  },
  "radial-intro": {
    render: radial_introRender,
    api: radial_introApi,
    controls: radial_introControls,
    code: radial_introCode,
  },
  "radial-menu": {
    render: radial_menuRender,
    api: radial_menuApi,
    controls: radial_menuControls,
    code: radial_menuCode,
  },
  rain: {
    render: rainRender,
    api: rainApi,
    controls: rainControls,
    code: rainCode,
  },
  "rainbow-button": {
    render: rainbow_buttonRender,
    api: rainbow_buttonApi,
    controls: rainbow_buttonControls,
    code: rainbow_buttonCode,
  },
  rating: {
    render: ratingRender,
    api: ratingApi,
    controls: ratingControls,
    code: ratingCode,
  },
  "reveal-loader": {
    render: reveal_loaderRender,
    api: reveal_loaderApi,
    controls: reveal_loaderControls,
    code: reveal_loaderCode,
  },
  "ripple-button": {
    render: ripple_buttonRender,
    api: ripple_buttonApi,
    controls: ripple_buttonControls,
    code: ripple_buttonCode,
  },
  "rotate-text": {
    render: rotate_textRender,
    api: rotate_textApi,
    controls: rotate_textControls,
    code: rotate_textCode,
  },
  "rotating-text": {
    render: rotating_textRender,
    api: rotating_textApi,
    controls: rotating_textControls,
    code: rotating_textCode,
  },
  sandbox: {
    render: sandboxRender,
    api: sandboxApi,
    controls: sandboxControls,
    code: sandboxCode,
  },
  "scroll-float": {
    render: scroll_floatRender,
    api: scroll_floatApi,
    controls: scroll_floatControls,
    code: scroll_floatCode,
  },
  "scroll-progress": {
    render: scroll_progressRender,
    api: scroll_progressApi,
    controls: scroll_progressControls,
    code: scroll_progressCode,
  },
  "scroll-reveal": {
    render: scroll_revealRender,
    api: scroll_revealApi,
    controls: scroll_revealControls,
    code: scroll_revealCode,
  },
  "scroll-stack": {
    render: scroll_stackRender,
    api: scroll_stackApi,
    controls: scroll_stackControls,
    code: scroll_stackCode,
  },
  "scroll-velocity": {
    render: scroll_velocityRender,
    api: scroll_velocityApi,
    controls: scroll_velocityControls,
    code: scroll_velocityCode,
  },
  sheet: {
    render: sheetRender,
    api: sheetApi,
    controls: sheetControls,
    code: sheetCode,
  },
  "shine-border": {
    render: shine_borderRender,
    api: shine_borderApi,
    controls: shine_borderControls,
    code: shine_borderCode,
  },
  "shiny-text": {
    render: shiny_textRender,
    api: shiny_textApi,
    controls: shiny_textControls,
    code: shiny_textCode,
  },
  snow: {
    render: snowRender,
    api: snowApi,
    controls: snowControls,
    code: snowCode,
  },
  "sparkles-text": {
    render: sparkles_textRender,
    api: sparkles_textApi,
    controls: sparkles_textControls,
    code: sparkles_textCode,
  },
  spinner: {
    render: spinnerRender,
    api: spinnerApi,
    controls: spinnerControls,
    code: spinnerCode,
  },
  "splash-cursor": {
    render: splash_cursorRender,
    api: splash_cursorApi,
    controls: splash_cursorControls,
    code: splash_cursorCode,
  },
  "split-text": {
    render: split_textRender,
    api: split_textApi,
    controls: split_textControls,
    code: split_textCode,
  },
  "spotlight-card": {
    render: spotlight_cardRender,
    api: spotlight_cardApi,
    controls: spotlight_cardControls,
    code: spotlight_cardCode,
  },
  "star-border": {
    render: star_borderRender,
    api: star_borderApi,
    controls: star_borderControls,
    code: star_borderCode,
  },
  status: {
    render: statusRender,
    api: statusApi,
    controls: statusControls,
    code: statusCode,
  },
  stepper: {
    render: stepperRender,
    api: stepperApi,
    controls: stepperControls,
    code: stepperCode,
  },
  "sticker-peel": {
    render: sticker_peelRender,
    api: sticker_peelApi,
    controls: sticker_peelControls,
    code: sticker_peelCode,
  },
  tabs: {
    render: tabsRender,
    api: tabsApi,
    controls: tabsControls,
    code: tabsCode,
  },
  tags: {
    render: tagsRender,
    api: tagsApi,
    controls: tagsControls,
    code: tagsCode,
  },
  "target-cursor": {
    render: target_cursorRender,
    api: target_cursorApi,
    controls: target_cursorControls,
    code: target_cursorCode,
  },
  terminal: {
    render: terminalRender,
    api: terminalApi,
    controls: terminalControls,
    code: terminalCode,
  },
  "text-cursor": {
    render: text_cursorRender,
    api: text_cursorApi,
    controls: text_cursorControls,
    code: text_cursorCode,
  },
  "text-reveal": {
    render: text_revealRender,
    api: text_revealApi,
    controls: text_revealControls,
    code: text_revealCode,
  },
  "typewriter-text": {
    render: typewriter_textRender,
    api: typewriter_textApi,
    controls: typewriter_textControls,
    code: typewriter_textCode,
  },
  "variable-proximity": {
    render: variable_proximityRender,
    api: variable_proximityApi,
    controls: variable_proximityControls,
    code: variable_proximityCode,
  },
  "video-player": {
    render: video_playerRender,
    api: video_playerApi,
    controls: video_playerControls,
    code: video_playerCode,
  },
  "video-text": {
    render: video_textRender,
    api: video_textApi,
    controls: video_textControls,
    code: video_textCode,
  },
  vortex: {
    render: vortexRender,
    api: vortexApi,
    controls: vortexControls,
    code: vortexCode,
  },
};
