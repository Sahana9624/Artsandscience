(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColor":["#FFFFFF"],"scripts":{"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoBack":TDV.Tour.Script.historyGoBack,"createTween":TDV.Tour.Script.createTween,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"translate":TDV.Tour.Script.translate,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getKey":TDV.Tour.Script.getKey,"init":TDV.Tour.Script.init,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeJS":TDV.Tour.Script.executeJS,"cloneBindings":TDV.Tour.Script.cloneBindings,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"playAudioList":TDV.Tour.Script.playAudioList,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getOverlays":TDV.Tour.Script.getOverlays,"startMeasurement":TDV.Tour.Script.startMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"id":"rootPlayer","class":"Player","data":{"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1,"pitch":1},"defaultLocale":"en","history":{},"name":"Player51120"},"buttonToggleFullscreen":"this.IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1","propagateClick":false,"children":["this.MainViewer","this.Container_A436BDBE_E27F_FD6B_41A3_6B955B8CD261","this.Image_A70CC556_E27F_0D3B_41E5_E67506C889A1","this.Container_29A91A10_1A0A_3FD7_41B7_B951EBA5AB03"],"defaultMenu":["fullscreen","mute","rotation"],"hash": "add39b10e05179ab462af382c144ec0b0ebf7e439be2b71494d02bb0d4903a1a", "definitions": [{"toolTipBorderColor":"#767676","id":"MainViewer","class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressRight":"33%","data":{"name":"Main Viewer"},"progressBarBackgroundColorDirection":"horizontal","toolTipFontColor":"#606060","playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeight":10,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","width":"100%","toolTipFontSize":"1.11vmin","subtitlesTop":0,"subtitlesFontSize":"3vmin","minHeight":50,"progressBottom":10,"playbackBarBottom":5,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"minWidth":100,"toolTipFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"progressHeight":2,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"progressBorderRadius":2,"playbackBarHeadShadow":true,"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"playbackBarRight":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadHeight":15},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_camera","displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetPitch":0,"targetStereographicFactor":0}],"class":"PanoramaCamera","displayOriginPosition":{"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","yaw":0,"pitch":-90,"hfov":165},"enterPointingToHorizon":true,"initialSequence":"this.sequence_A6AAEEFF_E27F_3CE9_41EC_206199E48FAA"},{"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","buttonCardboardView":"this.IconButton_A436CDBE_E27F_FD6B_41B6_643D86290C2B","aaEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"id":"Container_A436BDBE_E27F_FD6B_41A3_6B955B8CD261","class":"Container","data":{"initialScale":0.5,"name":"ContainerVR"},"backgroundOpacity":0,"right":"0.37%","propagateClick":false,"scrollBarOpacity":0,"overflow":"scroll","scrollBarMargin":0,"layout":"horizontal","scrollBarColor":"#000000","bottom":"4.92%","scrollBarWidth":5,"verticalAlign":"middle","width":"9.833%","height":"5.579%","minHeight":20,"children":["this.IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B","this.IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1","this.IconButton_A436CDBE_E27F_FD6B_41B6_643D86290C2B"],"minWidth":20},{"id":"panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF","label":trans('panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF.label'),"frames":[{"cube":{"levels":[{"colCount":30,"height":2560,"tags":"ondemand","url":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":5,"width":15360},{"colCount":18,"height":1536,"tags":"ondemand","url":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":3,"width":9216},{"colCount":12,"height":1024,"tags":"ondemand","url":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"colCount":6,"height":2048,"tags":"mobilevr2gen","url":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","data":{"label":"Dininghall"},"hfovMin":"135%","vfov":180,"hfov":360,"thumbnailUrl":"media/panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_t.jpg"},{"id":"audio_AB0BA81F_E279_0329_41E7_6EA0436535CE","autoplay":true,"class":"MediaAudio","data":{"label":"Kashia - Yellow Flower"},"audio":"this.audiores_A50B73F6_E279_04FA_41C8_0721A08F2677"},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","start":"this._initItemWithComps(this.mainPlayList, 0, [this.Image_A70CC556_E27F_0D3B_41E5_E67506C889A1], 'begin', true, this.FadeInEffect_A5F60860_E279_0317_41EB_A9284B254651, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.Image_A70CC556_E27F_0D3B_41E5_E67506C889A1], 'end', false, this.FadeOutEffect_A5F1F860_E279_0317_41C9_C71D29643C0D, 0, 0)","class":"PanoramaPlayListItem","camera":"this.panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A5EFF727_E27F_0D19_41E0_357BE68699CF"}]},{"id":"FadeInEffect_A5F60860_E279_0317_41EB_A9284B254651","class":"FadeInEffect","easing":"cubic_in_out"},{"id":"Image_29A94A10_1A0A_3FD7_41B2_4580D7A6EE8F","class":"Image","scaleMode":"fit_inside","backgroundOpacity":0,"data":{"name":"Image60665"},"url":trans('Image_29A94A10_1A0A_3FD7_41B2_4580D7A6EE8F.url'),"propagateClick":false,"verticalAlign":"middle","width":"6.087%","height":"60.465%","minHeight":1,"minWidth":1},{"id":"Label_29A95A0F_1A0A_3FC9_4195_97255B8C1F92","fontSize":"1.8vmin","class":"Label","backgroundOpacity":0,"data":{"name":"Label58804"},"propagateClick":false,"text":trans('Label_29A95A0F_1A0A_3FC9_4195_97255B8C1F92.text'),"width":"43.261%","height":"100%","fontColor":"#FFFFFF","minHeight":16,"minWidth":30,"fontFamily":"Arial"},{"id":"IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1","iconURL":"skin/IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1.png","class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1_pressed_rollover.png","maxHeight":58,"maxWidth":58,"height":51,"width":58,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"Container_29A91A10_1A0A_3FD7_41B7_B951EBA5AB03","class":"Container","data":{"initialScale":0.5,"name":"Container_ruthram"},"backgroundOpacity":0,"right":"0.48%","paddingLeft":10,"propagateClick":false,"overflow":"scroll","scrollBarMargin":2,"layout":"horizontal","scrollBarColor":"#000000","bottom":"0%","gap":5,"verticalAlign":"middle","width":"28.347%","height":"4.699%","minHeight":20,"children":["this.Label_29A95A0F_1A0A_3FC9_4195_97255B8C1F92","this.Image_29A94A10_1A0A_3FD7_41B2_4580D7A6EE8F","this.Label_29A93A10_1A0A_3FD7_41B7_365C382743E2"],"minWidth":20,"horizontalAlign":"right"},{"id":"FadeOutEffect_A5F1F860_E279_0317_41C9_C71D29643C0D","class":"FadeOutEffect","easing":"cubic_in_out"},{"id":"IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B","iconURL":"skin/IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B.png","class":"IconButton","data":{"initialScale":0.5,"name":"IconButton MUTE"},"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B_pressed.png","mode":"toggle","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B_pressed_rollover.png","maxHeight":58,"maxWidth":58,"height":50,"width":53,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center"},{"id":"Label_29A93A10_1A0A_3FD7_41B7_365C382743E2","fontSize":"1.8vmin","class":"Label","click":"this.openLink(this.translate('LinkBehaviour_29A92A10_1A0A_3FD7_41B3_1C5BDF599D2D.source'), '_blank')","backgroundOpacity":0,"data":{"name":"Label59916"},"paddingLeft":3,"propagateClick":false,"text":trans('Label_29A93A10_1A0A_3FD7_41B7_365C382743E2.text'),"width":"41.702%","textDecoration":"underline","height":"100%","minHeight":16,"minWidth":30,"fontFamily":"Arial","fontColor":"#FFFFFF"},{"id":"Image_A70CC556_E27F_0D3B_41E5_E67506C889A1","toolTipPaddingTop":4,"class":"Image","right":"47.04%","scaleMode":"fit_inside","click":"this.openLink(this.translate('LinkBehaviour_A66FA491_E279_0336_41D8_780E63463A85.source'), '_top')","toolTipFontColor":"#606060","backgroundOpacity":0,"toolTipPaddingRight":6,"url":trans('Image_A70CC556_E27F_0D3B_41E5_E67506C889A1.url'),"toolTipBorderColor":"#767676","data":{"name":"Homepage"},"propagateClick":false,"toolTipPaddingLeft":6,"toolTipPaddingBottom":4,"verticalAlign":"middle","top":"1.86%","toolTipBackgroundColor":"#F6F6F6","width":"4%","height":"5%","toolTipFontSize":"1.11vmin","minHeight":1,"visible":false,"toolTipShadowColor":"#333138","minWidth":1,"horizontalAlign":"center","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","toolTip":trans('Image_A70CC556_E27F_0D3B_41E5_E67506C889A1.toolTip')},{"id":"IconButton_A436CDBE_E27F_FD6B_41B6_643D86290C2B","iconURL":"skin/IconButton_A436CDBE_E27F_FD6B_41B6_643D86290C2B.png","class":"IconButton","data":{"name":"IconButton VR"},"backgroundOpacity":0,"verticalAlign":"middle","maxHeight":50,"maxWidth":50,"height":50,"width":50,"transparencyActive":true,"minHeight":1,"minWidth":1,"horizontalAlign":"center","rollOverIconURL":"skin/IconButton_A436CDBE_E27F_FD6B_41B6_643D86290C2B_rollover.png"},{"id":"sequence_A6AAEEFF_E27F_3CE9_41EC_206199E48FAA","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"audiores_A50B73F6_E279_04FA_41C8_0721A08F2677","mp3Url":trans('audiores_A50B73F6_E279_04FA_41C8_0721A08F2677.mp3Url'),"class":"AudioResource"}],"backgroundColorRatios":[0],"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"gap":10,"watermark":false,"width":"100%","buttonToggleMute":"this.IconButton_A436FDBD_E27F_FD6E_41E7_693EF0FB681B","height":"100%","minHeight":0,"minWidth":0,"left":541.65,"start":"this.playAudioList([this.audio_AB0BA81F_E279_0329_41E7_6EA0436535CE], true); this.init(); if(!this.get('fullscreenAvailable')) { [this.IconButton_A436DDBE_E27F_FD6B_41E0_0093AEEB5EB1].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.14.js.map
})();
//Generated with v2023.0.14, Wed Jul 12 2023